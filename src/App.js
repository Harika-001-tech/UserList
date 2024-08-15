import Userprofile from "./components/Userprofile/index"
import './App.css'

const userDetailsList=[
  { uniqueNo:1,
    imageUrl:"https://img.freepik.com/premium-photo/young-girl-3d-character-posture_1026950-52613.jpg?w=740",
    name:"Archana Chennadi",
    role:"Software Engineer"
  },
  { uniqueNo:2,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name:"Harika Chennadi",
    role:"Software Engineer"
  },
  { uniqueNo:3,
    imageUrl:"https://img.freepik.com/premium-photo/clean-sleek-photos-cartoon-posing_1269188-19425.jpg?w=740",
    name:" Yashasri Peechu",
    role:"Software Engineer"
  },
  { uniqueNo:4,
    imageUrl:"https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1723716064~exp=1723719664~hmac=ab173beaa80577fa2c917c5ffd6ea2f9d7c97d3f240969241ad0849d3c4bcb9a&w=740",
    name:"Srikanth Peechu",
    role:"Software Engineer"
  },
  { uniqueNo:5,
    imageUrl:"https://img.freepik.com/premium-photo/cartoon-character-with-hat-scarf-that-says-peace_1026950-48085.jpg?w=360",
    name:"Laxmi Chennadi",
    role:"Administator"
  },
  { uniqueNo:6,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name:"Venkat Reddy Chennadi",
    role:"Founder"
  }


]

const App=()=> (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem)=>(
        < Userprofile userDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
)

export default App 