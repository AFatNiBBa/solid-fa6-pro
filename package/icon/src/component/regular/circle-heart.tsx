
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-heart` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=regular circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0zNjEuNzE5IDE3MC43NUMzMzEuNzgxIDE0NS42NTYgMjg3LjIxOSAxNDYuMTI1IDI1Ni4wMzEgMTcwLjYyNUMyMjQuODEyIDE0Ni4xODggMTgwLjM0NCAxNDUuNTk0IDE1MC40NjkgMTcwLjcxOUMxMzIuMjgxIDE4NS44MTIgMTIxLjIxOSAyMDguMDMxIDEyMC4wOTQgMjMxLjU5NEMxMTguOTM4IDI1NS4yMTkgMTI3Ljc4MSAyNzguMzQ0IDE0NC4zNDQgMjk1LjA2MkwyMjkuMDYyIDM4MC44MTJDMjM2LjI4MSAzODguMDMxIDI0NS44MTIgMzkyIDI1NS45NjkgMzkySDI1Ni4wNjJDMjY2LjIxOSAzOTEuOTY5IDI3NS43NSAzODcuOTY5IDI4Mi45MDYgMzgwLjcxOUwzNjcuNTk0IDI5NS4wNjJDMzg0LjEyNSAyNzguNDA2IDM5MyAyNTUuMzQ0IDM5MS45MDYgMjMxLjc4MUMzOTAuODQ0IDIwOC4xODggMzc5Ljg0NCAxODUuOTM4IDM2MS43MTkgMTcwLjc1Wk0zMzMuNSAyNjEuMjgxTDI1NS45MzggMzM5LjcxOUwxNzguNDY5IDI2MS4zMTJDMTcxLjM0NCAyNTQuMTI1IDE2Ny41MzEgMjQ0LjEyNSAxNjguMDMxIDIzMy45MDZDMTY4LjUzMSAyMjMuNTYyIDE3My4xODggMjE0LjI1IDE4MS4yMTkgMjA3LjU2MkMxODcuMjUgMjAyLjUgMTk0Ljc4MSAyMDAuMDMxIDIwMi41IDIwMC4wMzFDMjEyLjQwNiAyMDAuMDMxIDIyMi42NTYgMjA0LjA5NCAyMzAuNSAyMTIuMDYzTDI1Ni4xNTYgMjM3LjM0NEwyODEuNzUgMjExLjg0NEMyOTUuNDY5IDE5Ny45MzggMzE3LjA2MiAxOTYgMzMwLjkwNiAyMDcuNTYyQzMzOC44NDQgMjE0LjIxOSAzNDMuNSAyMjMuNTk0IDM0My45NjkgMjMzLjk2OUMzNDQuNDM4IDI0NC4zMTIgMzQwLjcxOSAyNTQgMzMzLjUgMjYxLjI4MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM361.719 170.75C331.781 145.656 287.219 146.125 256.031 170.625C224.812 146.188 180.344 145.594 150.469 170.719C132.281 185.812 121.219 208.031 120.094 231.594C118.938 255.219 127.781 278.344 144.344 295.062L229.062 380.812C236.281 388.031 245.812 392 255.969 392H256.062C266.219 391.969 275.75 387.969 282.906 380.719L367.594 295.062C384.125 278.406 393 255.344 391.906 231.781C390.844 208.188 379.844 185.938 361.719 170.75ZM333.5 261.281L255.938 339.719L178.469 261.312C171.344 254.125 167.531 244.125 168.031 233.906C168.531 223.562 173.188 214.25 181.219 207.562C187.25 202.5 194.781 200.031 202.5 200.031C212.406 200.031 222.656 204.094 230.5 212.063L256.156 237.344L281.75 211.844C295.469 197.938 317.062 196 330.906 207.562C338.844 214.219 343.5 223.594 343.969 233.969C344.438 244.312 340.719 254 333.5 261.281Z" />
        </Icon>
    </>
}