import React from "react";

function Cards({data}) {
  console.log(data);
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.plan}
          </h5>
          <h6 className="card-price text-center">
            ${data.subscription}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className={data.isUser ? "" : "text-muted"}>  
                <i
                  className={data.isUser ? "fas fa-check" : "fas fa-times"}  
                ></i>
              </span>
              {data.user}
            </li>
            <li>
              <span className={data.isStorage ? "" : "text-muted"}>
                <i
                  className={data.isStorage ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.storage}
            </li>
            <li>
              <span className={data.isPublicproject ? "" : "text-muted"}>
                <i
                  className={
                    data.isPublicproject ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {data.publicproject}
            </li>
            <li>
              <span className={data.isAccess ? "" : "text-muted"}>
                <i
                  className={data.isAccess ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.access}
            </li>
            <li className={data.isPrivateprojects ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    data.isPrivateprojects ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {data.privateProjects}
            </li>
            <li className={data.isSupport ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={data.isSupport ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.support}
            </li>
            <li className={data.isSubdomain ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={data.isSubdomain ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.subDomain}
            </li>
            <li className={data.isStatusreports ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    data.isStatusreports ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {data.statusReports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
