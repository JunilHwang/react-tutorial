import React, { Component } from 'react'// list
interface listProps { active: string, html: string, onSelect(idx: number): void, category: number}
const List = ({ active, html, onSelect, category}: listProps) => {
  return (<li><a href="#" className={active} onClick={() => onSelect(category)}>{html}</a></li>)
}

export default List