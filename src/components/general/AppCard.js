import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const AppCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardContent>
                    <Typography variant="h4" componenet="h4">App Title</Typography>
                </CardContent>
            </CardHeader>
            <CardContent>
                <CardContent>
                    <Typography variant="p" componenet="p" color="textSecondary">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default  AppCard;