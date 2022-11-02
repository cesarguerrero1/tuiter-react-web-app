/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import TuitStats from "./TuitStats.js"

function TuitItem({tuit = {}}){
  return(
      <div className = "row mt-2 mx-0 wd-border-bottom">
          <div className="col text-end">
              <img className="wd-user-image" alt="User" src={`../images/${tuit.image}`}/>
          </div>
          <div className="col-10 row m-0">
              <div className="col-12 row m-0 p-0">
                  <div className="col-11 p-0">
                      <h6 className="my-1 fw-bold">{tuit.userName} <i className="fas fa-check-circle"></i><span className="wd-info-color fw-normal"> {tuit.userHandle} · {tuit.time}</span></h6>
                      <p className="m-0" dangerouslySetInnerHTML={{__html: tuit.tuit}}></p>
                  </div>
                  <div className="col-1 text-end p-0">
                      <i className="fas fa-ellipsis-h fa-fw wd-info-color"></i>
                  </div>
              </div>
              <TuitStats tuit={tuit}/>
          </div>
      </div>
  )
}

export default TuitItem;