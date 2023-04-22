import React from 'react'
import Image from 'next/image'

import { LocalGroupsData } from '../types'

import facebookSquareBlue from '../assets/facebook-square-blue.svg'
import facebookSquareWhite from '../assets/facebook-square-white.svg'

interface Props {
  groups: LocalGroupsData[]
}

export default function FacebookGroupsButton({ groups }: Props) {
  return (
    <div className="dropdown btn-group" role="group">
      <button className="btn btn-primary btn-lg dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
        <Image src={facebookSquareWhite} alt="Follow us on Facebook" className="fas" width={20} height={20} />
        Join local Facebook groups
      </button>
      <div className="dropdown-menu text-primary w-100">
        {groups.length > 0
          ? (
            <>
              {groups.map((group) => {
                return (
                  <a className="dropdown-item" href={group.link} target="_blank" rel="noreferrer" key={group.link}>
                    <Image src={facebookSquareBlue} alt="Facebook icon" className="fas" width={20} height={20} />
                    {group.name}
                  </a>
                )
              })}
            </>
          ) : (
            <a className="dropdown-item">
              <Image src={facebookSquareBlue} alt="Facebook icon" className="fas" width={20} height={20} />
              No local groups here yet...
            </a>
          )
        }
      </div>
    </div>
  )
}
