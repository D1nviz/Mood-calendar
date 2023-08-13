import { nanoid } from "nanoid";
import { BsEmojiFrown, BsEmojiSmile } from "react-icons/bs";

export const emoji = [
  {Icon: BsEmojiFrown, description: "sad", id: nanoid()},
  {Icon: BsEmojiSmile, description: "fun", id: nanoid()}
]