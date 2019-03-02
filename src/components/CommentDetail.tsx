import React from 'react'
import faker from 'faker'


export const CommentDetail = ()=>{
    // const {p} = props.person
    return(
        <>
        <div className="ui container comments">
        <div className="comment">
          <a href="" className="avatar">
          <img src={faker.image.avatar()} alt="" className="avatar"/></a>
          <div className="content"><a href="" className="author">Mace</a>
            <div className="metadata">
              <span className="date">Today</span>
            </div>
            <div className="text"> Nice Post!</div>
          </div>
        </div>
      </div>
        </>
    )
}