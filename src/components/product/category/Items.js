import { React, useState, useEffect } from 'react'
import Alert from './component/Alert'
import Table from './component/Table'


const Items = () => {
  const [cats, setCats] = useState([])
  const [message, setMessage] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setMessage('Loading Data ....')
    getCats().then(resolved => {
      let _data = [];
      if(Array.isArray(resolved.data) && resolved.data.length){
        _data = resolved.data;
      }
      setCats(_data)
      setMessage(resolved.message)
      setMounted(false)
    })

  }, [])


  const getCats = async () => {
    const request = await fetch('http://localhost:3333/cat', {method: 'get'})
    if (request.ok) {
      const response = await request.json()
      return Promise.resolve(response)
    } else {
      return Promise.reject(request)
    }
  }
  return (
    <>
    {mounted && <Alert severity={'info'} message={message} onClose={() => {}}/>}
    {!mounted && <Table  data={cats} setCats={setCats}/>}

    </>

  )
}

export default Items