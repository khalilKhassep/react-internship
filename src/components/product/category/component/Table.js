import { React, useState, useEffect } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import MuiTable from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Dialog from '../Dialog'
import Alert from '../component/Alert'


const Table = ({data, setCats}) => {
  const [_open, setOpen] = useState(false)
  const [_item, setItem] = useState({})
  const [index, setIndex] = useState(0)
  const [action, setAction] = useState('')

  useEffect(()=> {
    let cats = [];
    if(Array.isArray(data) && data.length){
       cats = data;
    }
    setCats(cats)
    // Remove button create on top of componenet

  } ,[])
  const handleEdit = (item) => {
    setAction('edit')
    setItem(item)
    setOpen(true) 
  }

  const handleView = item => {
    setAction('view')
    setItem(item)
    setOpen(true)
  }


  const deleteItem = async (id) => {
    const request = await fetch(`http://localhost:3333/cat/${id}`, {method: 'delete'})
    if (request.ok) {
       setCats(data.filter(cat => {
           if(cat.id !== id){
             return cat;
           }
        })
      )
    }
  }

  const handleCreate = () => {
    setAction('new')
    setOpen(true)
  }
  return (
    <>
    <Button variant={'outlined'} color={'primary'}  onClick={handleCreate}>
      Add Category
    </Button>
    {Array.isArray(data) && data.length ? (
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell align={'left'}>Id </TableCell>
              <TableCell align={'left'}>Name </TableCell>
              <TableCell align={'left'}>Created At </TableCell>
              <TableCell align={'left'}>Updated At </TableCell>
              <TableCell align={'left'}>Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align={'left'}>{item.id}</TableCell>
                  <TableCell align={'left'}>{item.name}</TableCell>
                  <TableCell align={'left'}>{item.created_at}</TableCell>
                  <TableCell align={'left'}>{item.updated_at}</TableCell>
                  <TableCell align={'left'}>
                    <ButtonGroup size={'small'} aria-label={'small outlined button group primary'}>
                      <Button onClick={() => handleEdit(item)}>Edit</Button>
                      <Button onClick={() => handleView(item)}>View</Button>
                      <Button onClick={() => deleteItem(item.id)}>Delete</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              )
            }) }

          </TableBody>

        </MuiTable>
      </TableContainer>
    ) : <Alert severity={'info'} message={"there is no data"} onClose={() => {}}/> }


    {_open &&
    <Dialog open={_open} setOpen={setOpen} item={_item} action={action} cats={data} setCats={setCats} index={index}/>}
    </>
  )
}

export default Table