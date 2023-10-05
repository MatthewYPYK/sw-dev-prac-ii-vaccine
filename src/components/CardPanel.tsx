"use client"
import React, { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
  const reducer = (state: Map<string, number>, action: { type: string; hospital: string; score: number | null; }) => {
    const newState = new Map(state)
    switch (action.type) {
      case "ADD":
        newState.set(action.hospital, action.score ?? state.get(action.hospital) ?? 0)
        return newState
      case "REMOVE" :
        newState.delete(action.hospital)
        return newState
      case "CHANGE":
        newState.set(action.hospital, action.score ?? 0)
        return action.score ? newState : state
      default:
        return state;
    }
  }

  let initialState = new Map<string, number>();

  const [ratings, dispatch] = useReducer(reducer, initialState);

  const mockHospital = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    { hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg" },
  ]

  return (
    <div style={{ flexDirection: "row" }}>
      <div style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}>
        { mockHospital.map((item) => {
          return (
            <Link className="w-1/5 h-[350px] mr-6 rounded-lg shadow-lg bg-white" href={`/hospital/${item.hid}`}>
              <Card
                name={item.name}
                image={item.image}
                score={ratings}
                dispatch={dispatch}
              />
            </Link>
          )
        })}
      </div>
      <b>Ratings</b>
      { 
        [ ...ratings.keys() ].map((hospital: string) => {
          return(
            <p
              onClick={() => {
                dispatch({ type: "CHANGE", hospital: hospital, score: 0 })
                dispatch({ type: "REMOVE", hospital: hospital, score: 0 })
              }}
            >
              { `${hospital} rating: ${ratings.get(hospital)}` }
            </p>
          )
        })
      }
    </div>
  )
}