import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiDialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogAction from '@material-ui/core/DialogActions'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block'
  },

}))

const Dialog = (props) => {
  const [action, setAction] = useState(props.action)
  const [title, setTitle] = useState(props.action.toUpperCase())
  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState({name: ''})
  const classes = useStyles()

  useEffect(() => {
    setCat(prevState => {
      if (props.item && props.action !== 'new') {
        console.log(props.item)
        return {
          ...cat,
          name: props.item.name,
          id: props.item.id
        }
      }
      return {...cat, name: 'New category'}
    })
    setOpen(props.open)
  }, [])
  const handleClose = () => {
    setOpen(false)
    setCat({})
    props.setOpen(false)
  }

  const handelInput = (event) => {
    setCat({...cat, name: event.target.value})
  }

  const storeCat = async () => {
    const request = await fetch('http://localhost:3333/cat', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},

      body: JSON.stringify({name: cat.name})
    })
    if (request.ok) {
      const response = await request.json()
      const l = props.cats.length - 1

      let a = [...props.cats, {
        id: response.id,
        name: response.values.$name,
        created_at: response.values.$created_at,
        updated_at: ''

      }]
      props.setCats(a)
    }
  }

  const updateItem = async (id) => {
    const request = await fetch(`http://localhost:3333/cat/update/${id}`,
      {
        method: 'put',
        body: JSON.stringify({name: cat.name}),
        headers: {'Content-Type': 'application/json'}
      })
    if (request.ok) {
      const response = await request.json()
      props.setCats(props.cats.map(cat => {
        if (cat.id === props.item.id) {
          return {
            ...cat,
            name: response.values.$name,
            updated_at: response.values.$updated_at
          }
        }
        return cat
      }))

    }
  }
  const deleteItem = async (id) => {
    const request = await fetch(`http://localhost:3333/cat/${id}`, {method: 'delete'})
    if (request.ok) {
      const response = await request.json()
      console.log(response)
      props.setCats(prevState => {
        props.cats.filter(cat => {
          return cat.id !== id
        })
      })
    }
  }
  const viewItem = (item) => {
    console.log(item)
  }

  const handelAction = (action) => {
    switch (action) {
      case 'new' :
        storeCat()
        break
      case 'edit' :
        updateItem(props.item.id)
        break
      case 'delete' :
        deleteItem(props.item.id)
        break
      default :
        viewItem(props.item)
        break
    }
  }

  return (
    <React.Fragment>


      <MuiDialog fullWidth={true} maxWidth={'md'} open={open}>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <form action="#">

            <FormControl  margin={'normal'} className={classes.root}>
              <TextField disabled={'view' === action} fullWidth={true} variant={'outlined'}
                         label={cat.name !== undefined || !cat.name === '' ? cat.name : 'New cat'}
                         placeholder={`Edit ${cat.name}`}
                         value={cat.name} onChange={event => handelInput(event)}/>
            </FormControl>

            <FormControl margin={'normal'} className={classes.root}>
              <Button disabled={'view' === action} variant={'contained'} color={'primary'}
                      onClick={() => handelAction(action)}>{'Submit'}</Button>
            </FormControl>

          </form>

        </DialogContent>

        <DialogAction>
          <Button onClick={handleClose} color={'primary'}>
            Close
          </Button>
        </DialogAction>

      </MuiDialog>
    </React.Fragment>
  )
}

export default Dialog