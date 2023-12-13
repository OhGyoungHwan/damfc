import { useEffect, useRef, useState } from "react";

export function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
