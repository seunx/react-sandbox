import React from 'react'
import faker from 'faker'


export const CommentDetail = (props: any)=>{
    // const {p} = props.person
    return(
        <>
        <div className="ui container comments">
        <div className="comment">
          <a href="" className="avatar">
          {/* <img src={faker.image.avatar()} alt="" className="avatar"/></a> */}
          <div className="content"><a href="" className="author">
          {props.perosn.name}
          </a>
            <div className="metadata">
              <span className="date">{props.person.date}</span>
            </div>
            <div className="text">
              {props.person.comment}
            </div>
          </div>
        </div>
      </div>
        </>
    )
}