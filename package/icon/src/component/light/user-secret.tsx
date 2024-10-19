
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-secret` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=light user-secret}
 * @preview ![user-secret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTguMDYyIDM0My40MzhMMzg3LjQ2OSAzMzIuODQ0TDQzMC4zMTIgMjQ3LjE1NkM0MzIuNzgxIDI0Mi4yMDMgNDMyLjUzMSAyMzYuMzEyIDQyOS42MjUgMjMxLjU5NEM0MjYuNjg4IDIyNi44NzUgNDIxLjUzMSAyMjQgNDE2IDIyNEgzNDcuNDU1QzM1MC4xMjkgMjEzLjcxMSAzNTIgMjAzLjExMyAzNTIgMTkyQzM1MiAxODMuMTU2IDM0NC44NDQgMTc2IDMzNiAxNzZTMzIwIDE4My4xNTYgMzIwIDE5MkMzMjAgMjQ0LjkzOCAyNzYuOTM4IDI4OCAyMjQgMjg4UzEyOCAyNDQuOTM4IDEyOCAxOTJDMTI4IDE4My4xNTYgMTIwLjg0NCAxNzYgMTEyIDE3NlM5NiAxODMuMTU2IDk2IDE5MkM5NiAyMDMuMTEzIDk3Ljg3MSAyMTMuNzExIDEwMC41NDUgMjI0SDMyQzI2LjQ2OSAyMjQgMjEuMzEyIDIyNi44NzUgMTguMzc1IDIzMS41OTRDMTUuNDY5IDIzNi4zMTIgMTUuMjE5IDI0Mi4yMDMgMTcuNjg4IDI0Ny4xNTZMNjAuNTMxIDMzMi44NDRMNDkuOTM4IDM0My40MzhDMTcuNzUgMzc1LjY0MSAwIDQxOC40NTMgMCA0NjRDMCA0OTAuNDY5IDIxLjUzMSA1MTIgNDggNTEySDE3NkMxODEuMDMxIDUxMiAxODUuNzUgNTA5LjY0MSAxODguNzgxIDUwNS42NDFDMTkxLjgxMyA1MDEuNjI1IDE5Mi43NSA0OTYuNDM3IDE5MS4zNzUgNDkxLjYwOUwxNTkuMzc1IDM3OS42MDlDMTU2Ljk2OSAzNzEuMTA5IDE0OC4xMjUgMzY2LjIwMyAxMzkuNTk0IDM2OC42MDlDMTMxLjA5NCAzNzEuMDQ3IDEyNi4xODggMzc5LjkwNiAxMjguNjI1IDM4OC4zOTFMMTU0Ljc4MSA0ODBINDhDMzkuMTg4IDQ4MCAzMiA0NzIuODI4IDMyIDQ2NEMzMiA0MjcgNDYuNDA2IDM5Mi4yMTkgNzIuNTYyIDM2Ni4wNjJMOTEuMzEyIDM0Ny4zMTJDOTYuMTg4IDM0Mi40MzcgOTcuNDA2IDMzNSA5NC4zMTIgMzI4Ljg0NEw1Ny44NzUgMjU2SDExMkMxMTIuNTc2IDI1NiAxMTMuMDY0IDI1NS43MyAxMTMuNjI1IDI1NS42NzJDMTM1Ljc4MSAyOTMuOTIyIDE3Ni42OTUgMzIwIDIyNCAzMjBTMzEyLjIxOSAyOTMuOTIyIDMzNC4zNzUgMjU1LjY3MkMzMzQuOTM2IDI1NS43MyAzMzUuNDI0IDI1NiAzMzYgMjU2SDM5MC4xMjVMMzUzLjY4NyAzMjguODQ0QzM1MC41OTQgMzM1IDM1MS44MTIgMzQyLjQzOCAzNTYuNjg3IDM0Ny4zMTJMMzc1LjQzNyAzNjYuMDYyQzQwMS41OTQgMzkyLjIxOSA0MTYgNDI3IDQxNiA0NjRDNDE2IDQ3Mi44MjggNDA4LjgxMiA0ODAgNDAwIDQ4MEgyOTMuMjE5TDMxOS4zNzUgMzg4LjM5MUMzMjEuODEyIDM3OS45MDYgMzE2LjkwNiAzNzEuMDQ3IDMwOC40MDYgMzY4LjYwOUMyOTkuNzgxIDM2Ni4xODcgMjkxLjAzMSAzNzEuMTA5IDI4OC42MjUgMzc5LjYwOUwyNTYuNjI1IDQ5MS42MDlDMjU1LjI1IDQ5Ni40MzcgMjU2LjE4NyA1MDEuNjI1IDI1OS4yMTkgNTA1LjY0MUMyNjIuMjUgNTA5LjY0MSAyNjYuOTY5IDUxMiAyNzIgNTEySDQwMEM0MjYuNDY5IDUxMiA0NDggNDkwLjQ2OSA0NDggNDY0QzQ0OCA0MTguNDUzIDQzMC4yNSAzNzUuNjQxIDM5OC4wNjIgMzQzLjQzOFpNMjI0IDE2MEMzNjEuMDYyIDE2MCA0MDkuMzEyIDExMy4yOTcgNDExLjMxMiAxMTEuMzEyQzQxNy41IDEwNS4xMjUgNDE3LjUgOTUuMTcyIDQxMS4zNzUgODguODkxQzQwNS4yNSA4Mi42NDEgMzk1LjE4NyA4Mi41MzEgMzg4LjgxMiA4OC41NDdDMzg4LjU3NiA4OC43NzMgMzc0LjAxOCAxMDIuMDA4IDMzOC4xMzEgMTEzLjA5MkMzMjYuMjc3IDU4LjUzMyAzMDYuNzU0IDAgMjc3LjA5NCAwQzI2Ny45MzggMCAyNTguNzUgMy45NjkgMjQ5Ljc1IDExLjgyOEMyMzQuODEyIDI0LjkzOCAyMTMuMDk0IDI0Ljg5MSAxOTguMjE5IDExLjc4MUMxODkuMjgxIDMuOTY5IDE4MC4wOTQgMCAxNzAuOTA2IDBDMTQxLjUyNyAwIDEyMS44OTEgNTguNTQ5IDEwOS44OTggMTEzLjExNUM3NC4zNTkgMTAyLjE1IDU5LjcyOSA4OS4wNjggNTkuMTg4IDg4LjU2MkM1Mi45NjkgODIuNDIyIDQyLjkwNiA4Mi40ODQgMzYuNjg4IDg4LjY4N0MzMC40MzggOTQuOTM3IDMwLjQzOCAxMDUuMDYyIDM2LjY4OCAxMTEuMzEyQzM4LjY4OCAxMTMuMjk3IDg2LjkzOCAxNjAgMjI0IDE2MFpNMTcyLjkzOCAzMi44MTJDMTczLjkzOCAzMy4zNTkgMTc1LjM0NCAzNC4yODEgMTc3LjEyNSAzNS44NDRDMjA0LjI1IDU5Ljc1IDI0My43MTkgNTkuNzE5IDI3MC44NDQgMzUuOTA2QzI3Mi41NjIgMzQuNDA2IDI3My45MzggMzMuNDg0IDI3NC45MzggMzIuOTA2QzI3OS43OTUgMzguMzkzIDI5My42MDUgNTkuMDkyIDMwNy4wMTggMTIwLjczMkMyODQuNzUgMTI1LjAxIDI1Ny40NjUgMTI4IDIyNCAxMjhDMTkwLjU1MyAxMjggMTYzLjI3OSAxMjUuMDE0IDE0MS4wMiAxMjAuNzQyQzE1NC44MDUgNTcuODM0IDE2OC4yNTIgMzcuOTI0IDE3Mi45MzggMzIuODEyWk0yNzIgMzY4QzI3MiAzNTkuMTU2IDI2NC44NDQgMzUyIDI1NiAzNTJIMTkyQzE4My4xNTYgMzUyIDE3NiAzNTkuMTU2IDE3NiAzNjhTMTgzLjE1NiAzODQgMTkyIDM4NEgyMDhWNDk2QzIwOCA1MDQuODQ0IDIxNS4xNTYgNTEyIDIyNCA1MTJTMjQwIDUwNC44NDQgMjQwIDQ5NlYzODRIMjU2QzI2NC44NDQgMzg0IDI3MiAzNzYuODQ0IDI3MiAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserSecret(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M398.062 343.438L387.469 332.844L430.312 247.156C432.781 242.203 432.531 236.312 429.625 231.594C426.688 226.875 421.531 224 416 224H347.455C350.129 213.711 352 203.113 352 192C352 183.156 344.844 176 336 176S320 183.156 320 192C320 244.938 276.938 288 224 288S128 244.938 128 192C128 183.156 120.844 176 112 176S96 183.156 96 192C96 203.113 97.871 213.711 100.545 224H32C26.469 224 21.312 226.875 18.375 231.594C15.469 236.312 15.219 242.203 17.688 247.156L60.531 332.844L49.938 343.438C17.75 375.641 0 418.453 0 464C0 490.469 21.531 512 48 512H176C181.031 512 185.75 509.641 188.781 505.641C191.813 501.625 192.75 496.437 191.375 491.609L159.375 379.609C156.969 371.109 148.125 366.203 139.594 368.609C131.094 371.047 126.188 379.906 128.625 388.391L154.781 480H48C39.188 480 32 472.828 32 464C32 427 46.406 392.219 72.562 366.062L91.312 347.312C96.188 342.437 97.406 335 94.312 328.844L57.875 256H112C112.576 256 113.064 255.73 113.625 255.672C135.781 293.922 176.695 320 224 320S312.219 293.922 334.375 255.672C334.936 255.73 335.424 256 336 256H390.125L353.687 328.844C350.594 335 351.812 342.438 356.687 347.312L375.437 366.062C401.594 392.219 416 427 416 464C416 472.828 408.812 480 400 480H293.219L319.375 388.391C321.812 379.906 316.906 371.047 308.406 368.609C299.781 366.187 291.031 371.109 288.625 379.609L256.625 491.609C255.25 496.437 256.187 501.625 259.219 505.641C262.25 509.641 266.969 512 272 512H400C426.469 512 448 490.469 448 464C448 418.453 430.25 375.641 398.062 343.438ZM224 160C361.062 160 409.312 113.297 411.312 111.312C417.5 105.125 417.5 95.172 411.375 88.891C405.25 82.641 395.187 82.531 388.812 88.547C388.576 88.773 374.018 102.008 338.131 113.092C326.277 58.533 306.754 0 277.094 0C267.938 0 258.75 3.969 249.75 11.828C234.812 24.938 213.094 24.891 198.219 11.781C189.281 3.969 180.094 0 170.906 0C141.527 0 121.891 58.549 109.898 113.115C74.359 102.15 59.729 89.068 59.188 88.562C52.969 82.422 42.906 82.484 36.688 88.687C30.438 94.937 30.438 105.062 36.688 111.312C38.688 113.297 86.938 160 224 160ZM172.938 32.812C173.938 33.359 175.344 34.281 177.125 35.844C204.25 59.75 243.719 59.719 270.844 35.906C272.562 34.406 273.938 33.484 274.938 32.906C279.795 38.393 293.605 59.092 307.018 120.732C284.75 125.01 257.465 128 224 128C190.553 128 163.279 125.014 141.02 120.742C154.805 57.834 168.252 37.924 172.938 32.812ZM272 368C272 359.156 264.844 352 256 352H192C183.156 352 176 359.156 176 368S183.156 384 192 384H208V496C208 504.844 215.156 512 224 512S240 504.844 240 496V384H256C264.844 384 272 376.844 272 368Z" />
        </Icon>
    </>
}