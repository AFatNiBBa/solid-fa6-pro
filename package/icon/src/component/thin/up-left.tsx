
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=thin up-left}
 * @preview ![up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjQuNzgxIDMzOC4yNzFMMjI5LjAxNiAyMDIuNTA2TDI5Ni44OTkgMTM0LjYyNEMzMDYuMDQ3IDEyNS40NzYgMzA4Ljc4NyAxMTEuNzA5IDMwMy44MzcgOTkuNzU1QzMwMi4xOTUgOTUuNzkzIDI5OS44MTcgOTIuMjg3IDI5Ni45MDIgODkuMzcyQzI5MS4wMTQgODMuNDg0IDI4Mi45MzIgNzkuOTk5IDI3NC4yNzEgODBINDcuOTk3QzM5LjE1OCA4MCAzMS4xNTkgODMuNTggMjUuMzY5IDg5LjM2OVMxNiAxMDMuMTU4IDE2IDExMS45OTdWMzM4LjI3MUMxNiAzNDYuOTMgMTkuNDg0IDM1NS4wMTMgMjUuMzcyIDM2MC45MDFDMjguMjg3IDM2My44MTYgMzEuNzkxIDM2Ni4xOTMgMzUuNzU1IDM2Ny44MzdDNDcuNzA5IDM3Mi43ODYgNjEuNDc2IDM3MC4wNDYgNzAuNjI0IDM2MC44OThMMTM4LjUwNiAyOTMuMDE2TDI3NC4yNzEgNDI4Ljc4QzI4Ni43NjkgNDQxLjI3OCAzMDcuMDI5IDQ0MS4yNzggMzE5LjUyNiA0MjguNzhMMzY0Ljc4MSAzODMuNTI2QzM3Ny4yNzcgMzcxLjAzIDM3Ny4yNzggMzUwLjc2OCAzNjQuNzgxIDMzOC4yNzFaTTMwOC4yMTIgNDE3LjQ2N0MzMDEuOTc0IDQyMy43MDUgMjkxLjgyMyA0MjMuNzA1IDI4NS41ODUgNDE3LjQ2N0wxMzguNTA2IDI3MC4zODhMNTkuMzEgMzQ5LjU4NEM1NC43MiAzNTQuMTc1IDQ3Ljg3NSAzNTUuNTM3IDQxLjg4NCAzNTMuMDU2QzM5LjkyNiAzNTIuMjQ0IDM4LjE3NiAzNTEuMDc3IDM2LjY4NiAzNDkuNTg3QzMzLjY2NCAzNDYuNTY1IDMyLjAwMSAzNDIuNTQ3IDMyLjAwMSAzMzguMjcxVjExMS45OTdDMzIuMDAxIDEwNy43MjEgMzMuNjY0IDEwMy43MDIgMzYuNjgzIDEwMC42ODNDMzkuNzAzIDk3LjY2MiA0My43MjIgOTYgNDcuOTk4IDk2SDI3NC4yNzNDMjc4LjU0OCA5NiAyODIuNTY2IDk3LjY2NCAyODUuNTg4IDEwMC42ODZDMjg3LjA3OCAxMDIuMTc2IDI4OC4yNDYgMTAzLjkyNCAyODkuMDU0IDEwNS44NzZDMjkxLjUzNyAxMTEuODc1IDI5MC4xNzcgMTE4LjcxOCAyODUuNTg1IDEyMy4zMUwyMDYuMzg5IDIwMi41MDZMMzUzLjQ2NyAzNDkuNTg0QzM1OS43MDYgMzU1LjgyMyAzNTkuNzA2IDM2NS45NzQgMzUzLjQ2NyAzNzIuMjEyTDMwOC4yMTIgNDE3LjQ2N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M364.781 338.271L229.016 202.506L296.899 134.624C306.047 125.476 308.787 111.709 303.837 99.755C302.195 95.793 299.817 92.287 296.902 89.372C291.014 83.484 282.932 79.999 274.271 80H47.997C39.158 80 31.159 83.58 25.369 89.369S16 103.158 16 111.997V338.271C16 346.93 19.484 355.013 25.372 360.901C28.287 363.816 31.791 366.193 35.755 367.837C47.709 372.786 61.476 370.046 70.624 360.898L138.506 293.016L274.271 428.78C286.769 441.278 307.029 441.278 319.526 428.78L364.781 383.526C377.277 371.03 377.278 350.768 364.781 338.271ZM308.212 417.467C301.974 423.705 291.823 423.705 285.585 417.467L138.506 270.388L59.31 349.584C54.72 354.175 47.875 355.537 41.884 353.056C39.926 352.244 38.176 351.077 36.686 349.587C33.664 346.565 32.001 342.547 32.001 338.271V111.997C32.001 107.721 33.664 103.702 36.683 100.683C39.703 97.662 43.722 96 47.998 96H274.273C278.548 96 282.566 97.664 285.588 100.686C287.078 102.176 288.246 103.924 289.054 105.876C291.537 111.875 290.177 118.718 285.585 123.31L206.389 202.506L353.467 349.584C359.706 355.823 359.706 365.974 353.467 372.212L308.212 417.467Z" />
        </Icon>
    </>
}