import React, { Component } from 'react'// list
interface listProps { active: string, html: string, onSelect(idx: number): void, category: number}
const List = ({ active, html, onSelect, category}: listProps) => {
  const preventSelect = (e: any) => {
    e.preventDefault()
    onSelect(category)
  }
  return (<li><a href="#" className={active} onClick={preventSelect}>{html}</a></li>)
}

export default List