import {useState} from 'react';
import TextField from '../inputs/Input';
import Button from '../inputs/Button'
import Box from '@material-ui/core/Box';


//import Button from '../inputs/Button';

import './Style.css';


const Login = () => {

    const [valied, setValied] = useState(null)
    const [message, setMessage] = useState('');
    const [credential, setCredential] = useState({
        password: "password",
        username: "username"
    });


    const passwordHandler = (password) => {
        validatePassword(password) ? setCredential({
            ...credential,
            password: password
        }) : setCredential({...credential});
    }
    const userNameHandler = username => {
        setCredential({...credential, username: username})
    }


    const login = async () => {
        if (valied) {
            const request = await fetch(`http://localhost:3333/users?name=${credential.username}`);
            if (request.ok) {
                const response = await request.json();
                validateUser(response[0]) ? setMessage(`Welcome ${response[0].name}`) : console.log("wrong info");
                setCredential({...credential,username: '',password: ''})

            }

        } else {
            throw new Error(`There is no auth ${credential}`)
        }
    }

    const validateUser = user => {
        return user.name === credential.username && user.password === credential.password;
    }

    const validatePassword = (password) => {
        /**
         * This regex will enforce these rules:
         - At least one upper case English letter, (?=.*?[A-Z])
         - At least one lower case English letter, (?=.*?[a-z])
         - At least one digit, (?=.*?[0-9])
         - At least one special character, (?=.*?[#?!@$%^&*-])
         - Minimum eight in length .{8,} (with the anchors)

         */

        const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        const _valid = regex.test(password);
        if (_valid) {
            setValied(true);
            return true;
        } else {
            setValied(false);
            return false;
        }

    }


    return (

        <div className={'login-container'}>
            <Box>
                <h3 className={'header'}>{message}</h3>
            </Box>
            <form className={'form'}>
                <TextField onChange={event => {
                    userNameHandler(event.target.value)
                     }} mb={5} required label={'required'} type={'text'}  display={'block'}
                           fullWidth placeholder={credential.username}/>
                <TextField onChange={(event) => {
                    passwordHandler(event.target.value)
                }} required label={'reauired'} type={'password'}  display={'block'}
                           fullWidth placeholder={credential.password}/>
                <Box>
                    <span>{valied ? "Password matches" : 'Password dont match'}</span>

                </Box>
                <Button onClick={login} variant={'outlined'} color={'primary'} mt={4}>Submit</Button>
            </form>
        </div>

    )



}

export default Login;

