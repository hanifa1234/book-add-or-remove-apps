import React,{useRef}  from 'react'


const UserHook = () => {

    const useNameRef = useRef()
    const usePassRef = useRef()
    useNameRef.current.style.color = "green";
    usePassRef.current.style.color = "red";



 const heandelSubmit=(event)=>{
    event.preventDefault();
    const userName = useNameRef.current.value;
    const userPass = usePassRef.current.value;
    


    console.log({userName, userPass});
}

  return (
    <form onSubmit={heandelSubmit} >
       <>
            <div>
                <label htmlFor='userName'> userName:  </label>
                <input type={"text"} id="userName" ref={useNameRef}/>
            </div>
            <div>
                <label htmlFor='password'> passWord:  </label>
                <input type={"password"} id="password" ref={usePassRef} />
            </div>



            <button > register </button>
            
        </>
      
    </form>
  )
}

export default UserHook