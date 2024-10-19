
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dove` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dove?s=regular dove}
 * @preview ![dove](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjguMDAyIDE2MC4yODlDMzY4LjAwMiAxNjkuMDQgMzc1LjI1MiAxNzYuMjkgMzg0LjAwMiAxNzYuMjlTNDAwLjAwMiAxNjkuMDQgNDAwLjAwMiAxNjAuMjg5QzQwMC4wMDIgMTUxLjQxMyAzOTIuNzUyIDE0NC4yODcgMzg0LjAwMiAxNDQuMjg3QzM3NS4xMjcgMTQ0LjI4NyAzNjguMDAyIDE1MS40MTMgMzY4LjAwMiAxNjAuMjg5Wk0zODQuMDAyIDY0LjAyOUMzMzcuNzUyIDY0LjAyOSAyOTkuMjUyIDk2Ljc4MiAyOTAuMTI3IDE0MC40MTJDMjYxLjEyNyAxMDMuNzgzIDI0MS4xMjcgNjAuNjU0IDIzMy44NzcgMTMuODk5QzIzMS43NTIgMC42NDggMjE1LjAwMiAtNS4xMDMgMjA2LjAwMiA1LjUyM0MxODAuODc3IDM1LjE1MSAxNjEuNzUyIDcwLjY1NSAxNTEuMDAyIDExMC42NTlDMTQ5LjM3NyAxMTYuNDA5IDE0OC42MjcgMTIyLjI4NSAxNDcuNjI3IDEyOC4xNkMxMjIuMjUyIDEwMy43ODMgMTAxLjI1MiA3NC42NTUgODcuMDAyIDQxLjc3N0M4MS41MDIgMjkuMjc1IDYzLjc1MiAyOC43NzUgNTcuODc3IDQxLjE1MkM0MS43NTIgNzUuMjggMzIuNjI3IDExMy4xNTkgMzIuMDAyIDE1My4xNjNDMzAuNzUyIDI0OS4yOTggODYuNzUyIDMxNi4zMDQgMTI3Ljg3NyAzNTIuNTU4TDEzLjc1MiAzOTEuMDYyQzEuNjI3IDM5NC4zMTIgLTMuODczIDQwOS4zMTQgMy4wMDIgNDIwLjMxNUMyMi43NTIgNDUyLjY5MyA3MS44NzcgNTA3LjMyNCAxNzcuNzUyIDUxMS45NDlDMTkxLjI1MiA1MTIuNTc0IDE5NS4zNzcgNTA3LjMyNCAyMDMuMDAyIDUwMi41NzNMMjc5LjM3NyA0NDguNDQzSDMyMC4wMDJDNDA4LjM3NyA0NDguNDQzIDQ4MC4wMDIgMzc2LjgxMSA0ODAuMDAyIDI4OC4zMDJWMTU5LjkxNEw1MTIuMDAyIDY0LjAyOUgzODQuMDAyWk0xOTcuMzc3IDEyMy4wMzVDMjAwLjAwMiAxMTMuMjg0IDIwMy4yNTIgMTAzLjkwOCAyMDcuMDAyIDk0Ljc4MkMyMjIuODc3IDEzMy4yODYgMjQ2Ljg3NyAxNjcuNzg5IDI3Ni4yNTIgMTk3LjI5MkMyNDYuMTI3IDE5MC40MTcgMjE3Ljc1MiAxNzkuMDQxIDE5Mi4yNTIgMTYzLjE2NEMxOTIuNjI3IDE0OS40MTMgMTk0LjAwMiAxMzUuOTExIDE5Ny4zNzcgMTIzLjAzNVpNNDMyLjAwMiAxNTIuMTYzVjI4OC4zMDJDNDMyLjAwMiAzNTAuMDU4IDM4MS43NTIgMzk5LjkzOCAzMjAuMDAyIDM5OS45MzhIMjY0LjEyN0wxNzQuNzUyIDQ2My42OTRDMTIyLjM3NyA0NjAuMzE5IDg4Ljc1MiA0NDIuMzE3IDY3Ljc1MiA0MjMuNDRMMjIxLjc1MiAzNzEuNDM1QzE2NS44NzcgMzI0LjkzIDc4LjYyNyAyNjEuMTc0IDgwLjAwMiAxNTMuNzg4QzgwLjEyNyAxNDQuNzg3IDgwLjc1MiAxMzYuNzg2IDgxLjg3NyAxMjguMDM1QzE3NC42MjcgMjQ5LjE3MyAzMjAuMDAyIDI1Ni4wNDggMzM2LjAwMiAyNTYuMDQ4VjE2MC4yODlDMzM2LjAwMiAxMzMuNjYxIDM1Ny41MDIgMTEyLjE1OSAzODQuMDAyIDExMi4xNTlINDQ1LjM3N0w0MzIuMDAyIDE1Mi4xNjNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dove(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368.002 160.289C368.002 169.04 375.252 176.29 384.002 176.29S400.002 169.04 400.002 160.289C400.002 151.413 392.752 144.287 384.002 144.287C375.127 144.287 368.002 151.413 368.002 160.289ZM384.002 64.029C337.752 64.029 299.252 96.782 290.127 140.412C261.127 103.783 241.127 60.654 233.877 13.899C231.752 0.648 215.002 -5.103 206.002 5.523C180.877 35.151 161.752 70.655 151.002 110.659C149.377 116.409 148.627 122.285 147.627 128.16C122.252 103.783 101.252 74.655 87.002 41.777C81.502 29.275 63.752 28.775 57.877 41.152C41.752 75.28 32.627 113.159 32.002 153.163C30.752 249.298 86.752 316.304 127.877 352.558L13.752 391.062C1.627 394.312 -3.873 409.314 3.002 420.315C22.752 452.693 71.877 507.324 177.752 511.949C191.252 512.574 195.377 507.324 203.002 502.573L279.377 448.443H320.002C408.377 448.443 480.002 376.811 480.002 288.302V159.914L512.002 64.029H384.002ZM197.377 123.035C200.002 113.284 203.252 103.908 207.002 94.782C222.877 133.286 246.877 167.789 276.252 197.292C246.127 190.417 217.752 179.041 192.252 163.164C192.627 149.413 194.002 135.911 197.377 123.035ZM432.002 152.163V288.302C432.002 350.058 381.752 399.938 320.002 399.938H264.127L174.752 463.694C122.377 460.319 88.752 442.317 67.752 423.44L221.752 371.435C165.877 324.93 78.627 261.174 80.002 153.788C80.127 144.787 80.752 136.786 81.877 128.035C174.627 249.173 320.002 256.048 336.002 256.048V160.289C336.002 133.661 357.502 112.159 384.002 112.159H445.377L432.002 152.163Z" />
        </Icon>
    </>
}