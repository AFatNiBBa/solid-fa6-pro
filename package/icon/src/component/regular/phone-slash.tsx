
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-slash?s=regular phone-slash}
 * @preview ![phone-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEyIDQ2OS4xMDlMNDc3LjgxIDM0OS4xODlDNTM5LjA1IDI3My43NzcgNTc1Ljk5OSAxNzcuODkzIDU3NS45OTkgNzMuMzkzQzU3NS45OTkgNDguODMgNTU5LjI5NiAyNy44NjEgNTM1LjM5MiAyMi40MDhMNDQ0LjE0NCAxLjM0NkM0MTkuNjEzIC00LjMyNiAzOTQuNDI3IDguMzMgMzg0LjI3MSAzMS41MzNMMzQyLjAyMyAxMzAuMDk2QzMzMi45NDUgMTUxLjQzOSAzMzkuMTMyIDE3Ni41MTggMzU3LjAzNyAxOTEuMTQzTDM5MC41ODMgMjE4LjYyN0MzODIuMzk2IDIzMi44NTQgMzcyLjg5NiAyNDYuMjEzIDM2Mi4zNyAyNTguNzExTDM4LjgxMiA1LjExM0MyOC4zNDMgLTMuMDU5IDEzLjMxMiAtMS4yNDYgNS4xMDkgOS4xOTFDLTMuMDYzIDE5LjYyOSAtMS4yMzUgMzQuNzIzIDkuMTg3IDQyLjg5NUw2MDEuMTg3IDUwNi44OTFDNjA1LjU5MyA1MTAuMzI4IDYxMC43OTYgNTEyIDYxNS45ODQgNTEyQzYyMy4xMDkgNTEyIDYzMC4xNTYgNTA4Ljg0NCA2MzQuODkgNTAyLjgxMkM2NDMuMDYyIDQ5Mi4zNzUgNjQxLjIzNCA0NzcuMjgxIDYzMC44MTIgNDY5LjEwOVpNMzk5Ljk4NiAyODguMTkzQzQxNi41MDUgMjY4LjE4MiA0MzEuMDUgMjQ2LjUyOSA0NDIuNTUgMjIzLjExMUM0NDcuNDU2IDIxMy4xMTEgNDQ0LjgzMSAyMDEuMDMzIDQzNi4yMDYgMTkzLjk3MUwzODcuNDI3IDE1NC4wMDJDMzg1LjkyNyAxNTIuNzY4IDM4NS40MjcgMTUwLjcwNSAzODYuMTc3IDE0OC45MzlMNDI4LjMxNiA1MC42MTFDNDI5LjAwMyA0OS4wNDkgNDMwLjYyOCA0OC4wMDIgNDMyLjM2MyA0OC4wMDJDNDMyLjY3NSA0OC4wMDIgNDMzLjAwMyA0OC4wMzMgNDMzLjMxNiA0OC4xMTFMNTI0LjY1OCA2OS4xODlDNTI2LjcwNCA2OS42NTggNTI4LjAwMSA3MS4yOTkgNTI4LjAwMSA3My4zOTNDNTI4LjAwMSAxNjYuNzQ2IDQ5NC42NzMgMjUyLjE4IDQzOS43OTggMzE5LjM5OEwzOTkuOTg2IDI4OC4xOTNaTTEzNy40MTkgNDY0QzEzNS4zMSA0NjQgMTMzLjY2OSA0NjIuNzE5IDEzMy4yMDEgNDYwLjcxOUwxMTIuMTIyIDM2OS4zMTJIMTEyLjEwN0MxMTEuNjU0IDM2Ny4zNDQgMTEyLjc3OSAzNjUuMTU2IDExNC42NTQgMzY0LjM0NEwyMTIuOTE3IDMyMi4yNUMyMTQuNjUyIDMyMS40MzggMjE2LjcyOCAzMjEuOTY5IDIxNy44MzcgMzIzLjM3NUwyNTcuODUzIDM3Mi4yNUMyNjQuOTE1IDM4MC44NzUgMjc3LjAwOSAzODMuNSAyODcuMDA3IDM3OC41OTRDMzAxLjU3NiAzNzEuNDQxIDMxNS40NTMgMzYzLjA2MiAzMjguNzkgMzUzLjkzMkwyODguNzA0IDMyMi41MTRDMjg2LjU5MSAzMjMuODAxIDI4NC42ODUgMzI1LjM5MSAyODIuNTM4IDMyNi42MjVMMjU1LjEwMyAyOTMuMTI1QzI0MC41NCAyNzUuMDYyIDIxNS4zMDYgMjY4Ljg5MSAxOTMuOTAyIDI3OC4xNzJMOTUuNzAxIDMyMC4yNUM3Mi4zOSAzMzAuMzEyIDU5LjY0IDM1NS40NjkgNjUuMzU5IDM4MC4xMjVMODYuNDE5IDQ3MS40NjlDOTEuODg4IDQ5NS4zMTIgMTEyLjg1NyA1MTIgMTM3LjQxOSA1MTJDMjQwLjA4MSA1MTIgMzM0LjQxMiA0NzYuMjgzIDQwOS4yMiA0MTYuOTcxTDM3MC4xNSAzODYuMzQ4QzMwNS4wNTggNDM0Ljg4NyAyMjQuNjczIDQ2NCAxMzcuNDE5IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PhoneSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.812 469.109L477.81 349.189C539.05 273.777 575.999 177.893 575.999 73.393C575.999 48.83 559.296 27.861 535.392 22.408L444.144 1.346C419.613 -4.326 394.427 8.33 384.271 31.533L342.023 130.096C332.945 151.439 339.132 176.518 357.037 191.143L390.583 218.627C382.396 232.854 372.896 246.213 362.37 258.711L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM399.986 288.193C416.505 268.182 431.05 246.529 442.55 223.111C447.456 213.111 444.831 201.033 436.206 193.971L387.427 154.002C385.927 152.768 385.427 150.705 386.177 148.939L428.316 50.611C429.003 49.049 430.628 48.002 432.363 48.002C432.675 48.002 433.003 48.033 433.316 48.111L524.658 69.189C526.704 69.658 528.001 71.299 528.001 73.393C528.001 166.746 494.673 252.18 439.798 319.398L399.986 288.193ZM137.419 464C135.31 464 133.669 462.719 133.201 460.719L112.122 369.312H112.107C111.654 367.344 112.779 365.156 114.654 364.344L212.917 322.25C214.652 321.438 216.728 321.969 217.837 323.375L257.853 372.25C264.915 380.875 277.009 383.5 287.007 378.594C301.576 371.441 315.453 363.062 328.79 353.932L288.704 322.514C286.591 323.801 284.685 325.391 282.538 326.625L255.103 293.125C240.54 275.062 215.306 268.891 193.902 278.172L95.701 320.25C72.39 330.312 59.64 355.469 65.359 380.125L86.419 471.469C91.888 495.312 112.857 512 137.419 512C240.081 512 334.412 476.283 409.22 416.971L370.15 386.348C305.058 434.887 224.673 464 137.419 464Z" />
        </Icon>
    </>
}