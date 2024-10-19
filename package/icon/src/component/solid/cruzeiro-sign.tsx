
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cruzeiro-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cruzeiro-sign?s=solid cruzeiro-sign}
 * @preview ![cruzeiro-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzUuMTI1IDM3My41NjJDMzg5IDM5MC43NjYgMzg2LjMxMiA0MTUuOTM4IDM2OS4wOTQgNDI5LjgxMkMzMjcuMjE5IDQ2My41NzggMjc2LjcxOSA0ODAuMjUgMjI2LjM3NSA0ODAuMjVDMTY4LjM0NCA0ODAuMjUgMTEwLjU2MiA0NTguMTI1IDY2LjQ2OSA0MTQuNTc4QzIzLjU5NCAzNzIuMjM0IDAgMzE1LjkyMiAwIDI1NlMyMy41OTQgMTM5Ljc2NiA2Ni40MzggOTcuNDM4QzE0OC44NDQgMTYuMDQ3IDI3OC45NjkgOS41MTYgMzY5LjA5NCA4Mi4xODhDMzg2LjMxMiA5Ni4wNjMgMzg5IDEyMS4yMzQgMzc1LjEyNSAxMzguNDM4QzM2MS4zMTMgMTU1LjYwOSAzMzYuMDYzIDE1OC4zNTkgMzE4LjkwNiAxNDQuNDY5QzI2MC40NjkgOTcuMzc1IDE3Ni4xNTYgMTAxLjU0NyAxMjIuNjU2IDE1NC4zNTlDOTUuMTU2IDE4MS41MzEgODAgMjE3LjYyNSA4MCAyNTZTOTUuMTU2IDMzMC40NjkgMTIyLjY4OCAzNTcuNjU2QzEzMy44NzUgMzY4LjcwMSAxNDYuNjIzIDM3Ny4xMTEgMTYwIDM4My44NzVWMjU2QzE2MCAyMzguMzI4IDE3NC4zMTIgMjI0IDE5MiAyMjRDMjAwLjk2MyAyMjQgMjA5LjAxMiAyMjcuNzE5IDIxNC44MTggMjMzLjY0NkMyMjcuMzQ4IDIyNy42NDMgMjQxLjIwMyAyMjQgMjU2IDIyNEMyNzIuOTA2IDIyNCAyODkuNTMxIDIyOC40NTMgMzA0LjA2MiAyMzYuODc1QzMxOS4zNDQgMjQ1LjczNCAzMjQuNTYyIDI2NS4zMjggMzE1LjY4NyAyODAuNjA5QzMwNi44MTIgMjk1Ljg3NSAyODcuMjUgMzAxLjA2MyAyNzEuOTM3IDI5Mi4yNUMyNjcuMTU2IDI4OS40NjkgMjYxLjY1NiAyODggMjU2IDI4OEMyMzguMzQ0IDI4OCAyMjQgMzAyLjM1OSAyMjQgMzIwVjM5OS44MzJDMjU3LjQyIDQwMC4zNTkgMjkxLjA5OCAzODkuOTM0IDMxOC45MDYgMzY3LjUzMUMzMzYuMDYyIDM1My42ODggMzYxLjMxMiAzNTYuMzkxIDM3NS4xMjUgMzczLjU2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CruzeiroSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M375.125 373.562C389 390.766 386.312 415.938 369.094 429.812C327.219 463.578 276.719 480.25 226.375 480.25C168.344 480.25 110.562 458.125 66.469 414.578C23.594 372.234 0 315.922 0 256S23.594 139.766 66.438 97.438C148.844 16.047 278.969 9.516 369.094 82.188C386.312 96.063 389 121.234 375.125 138.438C361.313 155.609 336.063 158.359 318.906 144.469C260.469 97.375 176.156 101.547 122.656 154.359C95.156 181.531 80 217.625 80 256S95.156 330.469 122.688 357.656C133.875 368.701 146.623 377.111 160 383.875V256C160 238.328 174.312 224 192 224C200.963 224 209.012 227.719 214.818 233.646C227.348 227.643 241.203 224 256 224C272.906 224 289.531 228.453 304.062 236.875C319.344 245.734 324.562 265.328 315.687 280.609C306.812 295.875 287.25 301.063 271.937 292.25C267.156 289.469 261.656 288 256 288C238.344 288 224 302.359 224 320V399.832C257.42 400.359 291.098 389.934 318.906 367.531C336.062 353.688 361.312 356.391 375.125 373.562Z" />
        </Icon>
    </>
}