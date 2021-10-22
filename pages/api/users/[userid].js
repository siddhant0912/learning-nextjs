import users from '../../../public/users'

export default function handler(req, res) {
    const {userid} = req.query
    const user  = users.filter(user => user.id === userid)
    if(user.length >= 1){
        res.status(200).json(...user)
    }else{
        res.status(200).json({error: 'User Not Found'})
    }
  }