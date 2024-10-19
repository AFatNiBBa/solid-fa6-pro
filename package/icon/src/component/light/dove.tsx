
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dove` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dove?s=light dove}
 * @preview ![dove](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDguMDQxIDE1OS4zNDNDMjQzLjA3MSAxNTkuMzQzIDIzOC4xNzkgMTU3LjAzIDIzNS4wNTQgMTUyLjcxN0MyMjAuNTY2IDEzMi42MjIgMjA4LjU0NyAxMTEuMjE0IDE5OS4xNTUgODguNzEyQzE5Ni4xNTQgOTUuNjE4IDE5My4zNTYgMTAyLjY1IDE5MS4xNjggMTA5LjEyQzE4OC4zNCAxMTcuNDY0IDE3OS4yNDQgMTIxLjkwMiAxNzAuODY3IDExOS4xMjFDMTYyLjQ5IDExNi4yNzYgMTU4LjAyIDEwNy4xODIgMTYwLjg0OSA5OC44MDZDMTY4LjIyNiA3Ny4xMTcgMTgwLjQ5NCA1Mi4wNTIgMTg4LjI5MyAzOS41MkMxOTEuNjY4IDM0LjE0NCAxOTcuOTgyIDMxLjM5NCAyMDQuMTQgMzIuMTEzQzIxMC40MjMgMzMuMDE5IDIxNS41OCAzNy41MTkgMjE3LjI5OSA0My42NDVDMjI2LjM4IDc1Ljk5MiAyNDEuMDg2IDEwNi4zNjkgMjYwLjk5NyAxMzMuOTY2QzI2Ni4xNyAxNDEuMTU0IDI2NC41NiAxNTEuMTU1IDI1Ny4zODcgMTU2LjMxMUMyNTQuNTU4IDE1OC4zNzQgMjUxLjI3NiAxNTkuMzQzIDI0OC4wNDEgMTU5LjM0M1pNMzU5Ljk2NSAxNTkuOTY4QzM1OS45NjUgMTczLjA5NCAzNzAuODQyIDE4My45NyAzODMuOTcgMTgzLjk3UzQwNy45NzYgMTczLjA5NCA0MDcuOTc2IDE1OS45NjhDNDA3Ljk3NiAxNDYuNjU0IDM5Ny4wOTggMTM1Ljk2NiAzODMuOTcgMTM1Ljk2NlMzNTkuOTY1IDE0Ni42NTQgMzU5Ljk2NSAxNTkuOTY4Wk01MTIgNjMuOTIyTDQ3OS45OTMgMTU5LjkzMVYyODguMTkyQzQ3OS45OTMgMzc2LjU2NiA0MDguMzQxIDQ0OC4yMDcgMzE5Ljk1NSA0NDguMjA3SDI2Ni44MThMMjAyLjkyOCA1MDIuOTYyQzIwMC40MjggNTA1LjIxMiAxOTEuMTc1IDUxMi41ODggMTc3LjY3MiA1MTEuOTYzQzcyLjE4MiA1MDcuNjA0IDIzLjE0MSA0NTYuMTA3IDMuMTEzIDQyNS4zMTJDLTMuOSA0MTQuNTI4IDEuNDYgNDAwLjEyMyAxMy45NDEgMzk3TDE0Mi41MzkgMzY0LjgyNEM0MS42NDEgMjgzLjE5MiAzMS4yNjMgMTk1LjkzNCAzMS44ODggMTUzLjA1NUMzMi4zODkgMTEyLjkyMiA0MS42NDMgNzUuMDM5IDU3LjY1IDQxLjAzM0M2My40NzYgMjguNjU3IDgxLjM1MSAyOS4zMzYgODYuODU5IDQxLjg1OEMxNDQuMzAzIDE3Mi40NTggMjcyLjI0MyAxOTcuMTE3IDI4Ny45NDggMTk5LjkzNFYxNTkuNTQ5QzI4Ny45NDggMTA2Ljc1NiAzMzAuNzUxIDYzLjk1OSAzODMuNTUxIDYzLjk1OUgzODMuNTUyQzM4My42OTUgNjMuOTU5IDM4My44MjggNjMuOTIyIDM4My45NyA2My45MjJINTEyWk00NjcuNjE1IDk1LjkyNUgzODMuOTdWOTUuOTYySDM4My42MDVDMzQ4LjUxOSA5Ni4xNjUgMzE5Ljk1NSAxMjQuODAzIDMxOS45NTUgMTYwLjA1NlYyMzguMTg4QzI5OS45NTEgMjM1LjgxMyAxNTYuMjkyIDIyNi4xODcgNzQuMTQ4IDg3LjA0OUM2Ny42NDcgMTA4LjU1MSA2NC4xNDYgMTMwLjY3OCA2My44OTYgMTUzLjQzQzYyLjI3IDI3Ni4zMTYgMTY0Ljc5NCAzNDEuNjk3IDIxMi40MyAzODAuNDUxTDQxLjY0MSA0MjMuMjA1QzYzLjE0NiA0NDcuNzA3IDEwNC40MDUgNDc2Ljk1OSAxNzkuMDQ4IDQ4MC4wODVDMTc5Ljc5OCA0ODAuMDg1IDI1NS4wNjUgNDE2LjIwNCAyNTUuMDY1IDQxNi4yMDRIMzE5Ljk1NUMzOTAuNTk3IDQxNi4yMDQgNDQ3Ljk4NSAzNTguNjk5IDQ0Ny45ODUgMjg4LjE5MlYxNTQuNjhMNDY3LjYxNSA5NS45MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dove(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M248.041 159.343C243.071 159.343 238.179 157.03 235.054 152.717C220.566 132.622 208.547 111.214 199.155 88.712C196.154 95.618 193.356 102.65 191.168 109.12C188.34 117.464 179.244 121.902 170.867 119.121C162.49 116.276 158.02 107.182 160.849 98.806C168.226 77.117 180.494 52.052 188.293 39.52C191.668 34.144 197.982 31.394 204.14 32.113C210.423 33.019 215.58 37.519 217.299 43.645C226.38 75.992 241.086 106.369 260.997 133.966C266.17 141.154 264.56 151.155 257.387 156.311C254.558 158.374 251.276 159.343 248.041 159.343ZM359.965 159.968C359.965 173.094 370.842 183.97 383.97 183.97S407.976 173.094 407.976 159.968C407.976 146.654 397.098 135.966 383.97 135.966S359.965 146.654 359.965 159.968ZM512 63.922L479.993 159.931V288.192C479.993 376.566 408.341 448.207 319.955 448.207H266.818L202.928 502.962C200.428 505.212 191.175 512.588 177.672 511.963C72.182 507.604 23.141 456.107 3.113 425.312C-3.9 414.528 1.46 400.123 13.941 397L142.539 364.824C41.641 283.192 31.263 195.934 31.888 153.055C32.389 112.922 41.643 75.039 57.65 41.033C63.476 28.657 81.351 29.336 86.859 41.858C144.303 172.458 272.243 197.117 287.948 199.934V159.549C287.948 106.756 330.751 63.959 383.551 63.959H383.552C383.695 63.959 383.828 63.922 383.97 63.922H512ZM467.615 95.925H383.97V95.962H383.605C348.519 96.165 319.955 124.803 319.955 160.056V238.188C299.951 235.813 156.292 226.187 74.148 87.049C67.647 108.551 64.146 130.678 63.896 153.43C62.27 276.316 164.794 341.697 212.43 380.451L41.641 423.205C63.146 447.707 104.405 476.959 179.048 480.085C179.798 480.085 255.065 416.204 255.065 416.204H319.955C390.597 416.204 447.985 358.699 447.985 288.192V154.68L467.615 95.925Z" />
        </Icon>
    </>
}