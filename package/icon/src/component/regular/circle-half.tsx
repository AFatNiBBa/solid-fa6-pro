
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-half` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=regular circle-half}
 * @preview ![circle-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQuMzAzIDE4LjM4M0MyMjIuNzY4IDE4LjM4MyAyMjEuMjA5IDE4LjQ5OCAyMTkuNjM5IDE4LjczNkMxMDQuMzQ2IDM2LjI2IDE2IDEzNS44MTIgMTYgMjU2UzEwNC4zNDYgNDc1Ljc0IDIxOS42MzkgNDkzLjI2MkMyMjEuMjExIDQ5My41MDIgMjIyLjc2NiA0OTMuNjE3IDIyNC4zMDMgNDkzLjYxN0MyNDEuNTAyIDQ5My42MTcgMjU2IDQ3OS4xNDEgMjU2IDQ2MS4zNVY1MC42NDhDMjU2IDMyLjg1NyAyNDEuNTA0IDE4LjM4MyAyMjQuMzAzIDE4LjM4M1pNMjA4IDQ0MS45NDdDMTI0LjY5NSA0MjAuMzkzIDY0IDM0My42MTMgNjQgMjU2UzEyNC42OTUgOTEuNjA3IDIwOCA3MC4wNTNWNDQxLjk0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M224.303 18.383C222.768 18.383 221.209 18.498 219.639 18.736C104.346 36.26 16 135.812 16 256S104.346 475.74 219.639 493.262C221.211 493.502 222.766 493.617 224.303 493.617C241.502 493.617 256 479.141 256 461.35V50.648C256 32.857 241.504 18.383 224.303 18.383ZM208 441.947C124.695 420.393 64 343.613 64 256S124.695 91.607 208 70.053V441.947Z" />
        </Icon>
    </>
}