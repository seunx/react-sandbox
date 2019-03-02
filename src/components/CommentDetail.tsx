import React from 'react'
import faker from 'faker'


export const CommentDetail = (props: any)=>{
    const {avatar,name,date,post} = props.person
    return(
        <>
        <div className="ui container comments">
        <div className="comment">
          <a href="" className="avatar">
          <img src={avatar} alt="" className="avatar"/></a>
          <div className="content"><a href="" className="author">{name}</a>
            <div className="metadata">
              <span className="date">{date}</span>
            </div>
            <div className="text">{post}</div>
          </div>
        </div>
      </div>
        </>
    )
}