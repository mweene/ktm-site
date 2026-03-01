import { useState } from "react";
import {Plus, Minus} from "lucide-react";

const beliefsObject = [
  {id: 1, title: "the holy scriptures", content: "scriptures from christ"},
  {id: 2, title: "the holy trinity", content: ""},
  {id: 3, title: "the father", content: ""},
  {id: 4, title: "the son", content: ""},
  {id: 5, title: "the holy spirit", content: ""}
];

export default function Beliefs () {
  return (
    <div className="bg-neutral-700 rounded-4xl min-h-120 p-4">
      <h2 className="uppercase font-semibold text-lg">fundamental beliefs</h2>

      <ul className="grid gap-2">
        {beliefsObject.map(obj => <BCard key={obj.id} title={obj.title} content={obj.content}/>)}
      </ul>
    </div>
  )
}

function BCard({title, content}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p> 
    </div>
  )
}
