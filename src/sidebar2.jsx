import React ,{useState} from 'react'


const SideBar2 =({days})=>{


   //use hook state to know sate of button 
   const[isVisibleSideBar,SetIsVisibleSideBar] = useState(false)

   //give style for component if visible we use class sidebar if not use class hudden 
   const sidebarClass= isVisibleSideBar ? 'sidebar' : 'sidebar hidden'
   const textButton = isVisibleSideBar ? 'Скрыть' : 'Выбрать день';

return(
    <>
       <button className="" onClick={()=>SetIsVisibleSideBar(!isVisibleSideBar)}>
           {textButton}
           
        </button>

        <div className={sidebarClass}>
        <div className='sidebar__heading'>
          <h3 className='sidebar__title'>Навигация по дням</h3>
        </div>
        <ul className='sidebar__days'>
            {
                days.map(day=>{
              
            
                    return(
                        <li className='sidebar__days-item' key={day}>
                           {`День ${day}`}
                        

                        </li>
                    )
                })
            }


        </ul>

        </div>
    </>
)

}


export default  SideBar2