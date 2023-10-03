import { v1, v4 } from "uuid";
import { nanoid } from "nanoid";
import { ulid } from "ulidx";

export default function Uuid() {
  return (
    <div>
      <div>UUID v1: {v1()}</div>
      {/* <div>UUID v3: {uuidv3}</div>; */}
      <div>UUID v4: {v4()}</div>
      <div>Nano id: {nanoid()}</div>
      <div>ulid id: {ulid()}</div>
    </div>
  );
}
