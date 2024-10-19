
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-half` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=thin heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuNzY3IDEwMi40NzFDMjU1Ljc2NSA5OC4zMiAyNTQuMTQ5IDk0LjMzMyAyNTEuMjYxIDkxLjM1TDIzNi4zMTkgNzUuOTIyQzIwOC42MzEgNDcuMzQgMTcwLjc4MSAzMiAxMzMuMjg5IDMyQzEwMy4xNDkgMzIgNzMuMjMxIDQxLjkyMiA0OS4wNDEgNjIuODU5Qy0xMy4xMDMgMTE2LjY1MiAtMTYuMTk3IDIxMi41MTYgMzkuODIyIDI3MC40ODRMMjMyLjk3NSA0NzAuMTk1QzIzMy4wMzggNDcwLjI2MSAyMzMuMTAxIDQ3MC4zMjYgMjMzLjE2NSA0NzAuMzlDMjQxLjQ1MiA0NzguODIgMjU1Ljk1OCA0NzIuMTIzIDI1NS45NTMgNDYwLjMwMkMyNTUuOTIyIDM4OC44NjMgMjU1Ljc5MSAxNDUuMzQxIDI1NS43NjcgMTAyLjQ3MVpNNTEuMzI2IDI1OS4zNjdDMjcuMzk3IDIzNC42MDIgMTQuNTY5IDIwMC4yOTcgMTYuMTI3IDE2NS4yMzhDMTcuNzA1IDEyOS44NzUgMzMuMTExIDk3LjgxMiA1OS41MTQgNzQuOTYxQzc5Ljg4NyA1Ny4zMiAxMDUuNDAyIDQ4IDEzMy4yODkgNDhDMTY3LjQyMiA0OCAyMDAuNzgzIDYyLjIzNCAyMjQuODI2IDg3LjA1NUMyMzIuOTkyIDk1LjQ4NCAyMzcuMjE3IDk5Ljg0NiAyNDAgMTAyLjcxOVY0NTQuNDQzTDUxLjMyNiAyNTkuMzY3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HeartHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.767 102.471C255.765 98.32 254.149 94.333 251.261 91.35L236.319 75.922C208.631 47.34 170.781 32 133.289 32C103.149 32 73.231 41.922 49.041 62.859C-13.103 116.652 -16.197 212.516 39.822 270.484L232.975 470.195C233.038 470.261 233.101 470.326 233.165 470.39C241.452 478.82 255.958 472.123 255.953 460.302C255.922 388.863 255.791 145.341 255.767 102.471ZM51.326 259.367C27.397 234.602 14.569 200.297 16.127 165.238C17.705 129.875 33.111 97.812 59.514 74.961C79.887 57.32 105.402 48 133.289 48C167.422 48 200.783 62.234 224.826 87.055C232.992 95.484 237.217 99.846 240 102.719V454.443L51.326 259.367Z" />
        </Icon>
    </>
}