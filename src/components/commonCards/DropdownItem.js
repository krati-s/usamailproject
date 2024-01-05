import React from 'react'
import { Link } from 'react-router-dom'

const DropdownItem = ({to , itemText}) => {
  return (
    <li>
                            <Link to={to}>
                                <span class="text">{itemText}</span>
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14">
                                        <path
                                            d="M1.4 300.394h19.135l-3.585 3.828c-1.03 1.1.515 2.749 1.545 1.65l3.265-3.492 2.18-2.331a1.22 1.22 0 0 0 0-1.641l-5.445-5.821a1.057 1.057 0 0 0-.789-.352 1.175 1.175 0 0 0-.755 2l3.594 3.829h-19.204a1.166 1.166 0 0 0 .056 2.329z"
                                            transform="translate(-.256 -292.234)"></path>
                                    </svg>
                                </span>
                            </Link>
                        </li>
  )
}

export default DropdownItem