
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dharmachakra` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dharmachakra?s=solid dharmachakra}
 * @preview ![dharmachakra](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTUgMjI1TDQ3Ny43NSAyMjYuMTI1QzQ3Mi41IDE4Ni42MjUgNDU3IDE1MC41IDQzMy44NzUgMTIwLjI1TDQ0Ni44NzUgMTA4Ljg3NUM0NTMuNzUgMTAyLjc1IDQ1NC4xMjUgOTIuMTI1IDQ0Ny42MjUgODUuNUw0MjYuNSA2NC4zNzVDNDE5Ljg3NSA1Ny44NzUgNDA5LjI1IDU4LjI1IDQwMy4xMjUgNjUuMTI1TDM5MS43NSA3OC4xMjVDMzYxLjUgNTUgMzI1LjM3NSAzOS41IDI4NS44NzUgMzQuMjVMMjg3IDE3QzI4Ny41IDcuNzUgMjgwLjI1IDAgMjcxIDBIMjQxQzIzMS43NSAwIDIyNC41IDcuNzUgMjI1IDE3TDIyNi4xMjUgMzQuMjVDMTg2LjYyNSAzOS41IDE1MC41IDU1IDEyMC4yNSA3OC4xMjVMMTA4Ljg3NSA2NS4xMjVDMTAyLjc1IDU4LjI1IDkyLjEyNSA1Ny44NzUgODUuNjI1IDY0LjM3NUw2NC4zNzUgODUuNUM1Ny44NzUgOTIuMTI1IDU4LjI1IDEwMi43NSA2NS4xMjUgMTA4Ljg3NUw3OC4xMjUgMTIwLjI1QzU1IDE1MC41IDM5LjUgMTg2LjYyNSAzNC4yNSAyMjYuMTI1TDE3IDIyNUM3Ljc1IDIyNC41IDAgMjMxLjc1IDAgMjQxVjI3MUMwIDI4MC4yNSA3Ljc1IDI4Ny41IDE3IDI4N0wzNC4yNSAyODUuODc1QzM5LjUgMzI1LjM3NSA1NSAzNjEuNSA3OC4xMjUgMzkxLjc1TDY1LjEyNSA0MDMuMTI1QzU4LjI1IDQwOS4yNSA1Ny44NzUgNDE5Ljg3NSA2NC4zNzUgNDI2LjM3NUw4NS42MjUgNDQ3LjYyNUM5Mi4xMjUgNDU0LjEyNSAxMDIuNzUgNDUzLjc1IDEwOC44NzUgNDQ2Ljg3NUwxMjAuMjUgNDMzLjg3NUMxNTAuNSA0NTcgMTg2LjYyNSA0NzIuNSAyMjYuMTI1IDQ3Ny43NUwyMjUgNDk1QzIyNC41IDUwNC4yNSAyMzEuNzUgNTEyIDI0MSA1MTJIMjcxQzI4MC4yNSA1MTIgMjg3LjUgNTA0LjI1IDI4NyA0OTVMMjg1Ljg3NSA0NzcuNzVDMzI1LjM3NSA0NzIuNSAzNjEuNSA0NTcgMzkxLjc1IDQzMy44NzVMNDAzLjEyNSA0NDYuODc1QzQwOS4yNSA0NTMuNzUgNDE5Ljg3NSA0NTQuMTI1IDQyNi41IDQ0Ny42MjVMNDQ3LjYyNSA0MjYuMzc1QzQ1NC4xMjUgNDE5Ljg3NSA0NTMuNzUgNDA5LjI1IDQ0Ni44NzUgNDAzLjEyNUw0MzMuODc1IDM5MS43NUM0NTcgMzYxLjUgNDcyLjUgMzI1LjM3NSA0NzcuNzUgMjg1Ljg3NUw0OTUgMjg3QzUwNC4yNSAyODcuNSA1MTIgMjgwLjI1IDUxMiAyNzFWMjQxQzUxMiAyMzEuNzUgNTA0LjI1IDIyNC41IDQ5NSAyMjVaTTI4MS44NzUgOTguNjI1QzMwNi42MjUgMTAyLjYyNSAzMjkuNSAxMTIuMjUgMzQ5LjEyNSAxMjYuMzc1TDMwNi41IDE3NC42MjVDMjk3Ljc1IDE2OS4yNSAyODguMTI1IDE2NS4xMjUgMjc3Ljg3NSAxNjIuNzVMMjgxLjg3NSA5OC42MjVaTTIzMC4xMjUgOTguNjI1TDIzNC4xMjUgMTYyLjc1QzIyMy44NzUgMTY1LjEyNSAyMTQuMjUgMTY5LjI1IDIwNS41IDE3NC42MjVMMTYyLjg3NSAxMjYuMzc1QzE4Mi41IDExMi4yNSAyMDUuMzc1IDEwMi42MjUgMjMwLjEyNSA5OC42MjVaTTEyNi4zNzUgMTYzTDE3NC43NSAyMDUuNUMxNjkuMjUgMjE0LjI1IDE2NS4xMjUgMjIzLjg3NSAxNjIuNzUgMjM0LjEyNUw5OC42MjUgMjMwLjEyNUMxMDIuNjI1IDIwNS4zNzUgMTEyLjI1IDE4Mi41IDEyNi4zNzUgMTYzWk05OC42MjUgMjgxLjg3NUwxNjIuNzUgMjc3Ljg3NUMxNjUuMTI1IDI4OC4xMjUgMTY5LjI1IDI5Ny43NSAxNzQuNjI1IDMwNi41TDEyNi4zNzUgMzQ5LjEyNUMxMTIuMjUgMzI5LjUgMTAyLjYyNSAzMDYuNjI1IDk4LjYyNSAyODEuODc1Wk0yMzAuMTI1IDQxMy4zNzVDMjA1LjM3NSA0MDkuMzc1IDE4Mi41IDM5OS43NSAxNjIuODc1IDM4NS42MjVMMjA1LjUgMzM3LjI1QzIxNC4yNSAzNDIuNzUgMjIzLjg3NSAzNDYuODc1IDIzNC4xMjUgMzQ5LjI1TDIzMC4xMjUgNDEzLjM3NVpNMjU2IDI4OEMyMzguMzc1IDI4OCAyMjQgMjczLjYyNSAyMjQgMjU2UzIzOC4zNzUgMjI0IDI1NiAyMjRTMjg4IDIzOC4zNzUgMjg4IDI1NlMyNzMuNjI1IDI4OCAyNTYgMjg4Wk0yODEuODc1IDQxMy4zNzVMMjc3Ljg3NSAzNDkuMjVDMjg4LjEyNSAzNDYuODc1IDI5Ny43NSAzNDIuNzUgMzA2LjUgMzM3LjI1TDM0OSAzODUuNjI1QzMyOS41IDM5OS43NSAzMDYuNjI1IDQwOS4zNzUgMjgxLjg3NSA0MTMuMzc1Wk0zODUuNjI1IDM0OUwzMzcuMzc1IDMwNi41QzM0Mi43NSAyOTcuNzUgMzQ2Ljg3NSAyODguMTI1IDM0OS4yNSAyNzcuODc1TDQxMy4zNzUgMjgxLjg3NUM0MDkuMzc1IDMwNi42MjUgMzk5Ljc1IDMyOS41IDM4NS42MjUgMzQ5Wk0zNDkuMjUgMjM0LjEyNUMzNDYuODc1IDIyMy44NzUgMzQyLjc1IDIxNC4yNSAzMzcuMjUgMjA1LjVMMzg1LjYyNSAxNjNDMzk5Ljc1IDE4Mi41IDQwOS4zNzUgMjA1LjM3NSA0MTMuMzc1IDIzMC4xMjVMMzQ5LjI1IDIzNC4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dharmachakra(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M495 225L477.75 226.125C472.5 186.625 457 150.5 433.875 120.25L446.875 108.875C453.75 102.75 454.125 92.125 447.625 85.5L426.5 64.375C419.875 57.875 409.25 58.25 403.125 65.125L391.75 78.125C361.5 55 325.375 39.5 285.875 34.25L287 17C287.5 7.75 280.25 0 271 0H241C231.75 0 224.5 7.75 225 17L226.125 34.25C186.625 39.5 150.5 55 120.25 78.125L108.875 65.125C102.75 58.25 92.125 57.875 85.625 64.375L64.375 85.5C57.875 92.125 58.25 102.75 65.125 108.875L78.125 120.25C55 150.5 39.5 186.625 34.25 226.125L17 225C7.75 224.5 0 231.75 0 241V271C0 280.25 7.75 287.5 17 287L34.25 285.875C39.5 325.375 55 361.5 78.125 391.75L65.125 403.125C58.25 409.25 57.875 419.875 64.375 426.375L85.625 447.625C92.125 454.125 102.75 453.75 108.875 446.875L120.25 433.875C150.5 457 186.625 472.5 226.125 477.75L225 495C224.5 504.25 231.75 512 241 512H271C280.25 512 287.5 504.25 287 495L285.875 477.75C325.375 472.5 361.5 457 391.75 433.875L403.125 446.875C409.25 453.75 419.875 454.125 426.5 447.625L447.625 426.375C454.125 419.875 453.75 409.25 446.875 403.125L433.875 391.75C457 361.5 472.5 325.375 477.75 285.875L495 287C504.25 287.5 512 280.25 512 271V241C512 231.75 504.25 224.5 495 225ZM281.875 98.625C306.625 102.625 329.5 112.25 349.125 126.375L306.5 174.625C297.75 169.25 288.125 165.125 277.875 162.75L281.875 98.625ZM230.125 98.625L234.125 162.75C223.875 165.125 214.25 169.25 205.5 174.625L162.875 126.375C182.5 112.25 205.375 102.625 230.125 98.625ZM126.375 163L174.75 205.5C169.25 214.25 165.125 223.875 162.75 234.125L98.625 230.125C102.625 205.375 112.25 182.5 126.375 163ZM98.625 281.875L162.75 277.875C165.125 288.125 169.25 297.75 174.625 306.5L126.375 349.125C112.25 329.5 102.625 306.625 98.625 281.875ZM230.125 413.375C205.375 409.375 182.5 399.75 162.875 385.625L205.5 337.25C214.25 342.75 223.875 346.875 234.125 349.25L230.125 413.375ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224S288 238.375 288 256S273.625 288 256 288ZM281.875 413.375L277.875 349.25C288.125 346.875 297.75 342.75 306.5 337.25L349 385.625C329.5 399.75 306.625 409.375 281.875 413.375ZM385.625 349L337.375 306.5C342.75 297.75 346.875 288.125 349.25 277.875L413.375 281.875C409.375 306.625 399.75 329.5 385.625 349ZM349.25 234.125C346.875 223.875 342.75 214.25 337.25 205.5L385.625 163C399.75 182.5 409.375 205.375 413.375 230.125L349.25 234.125Z" />
        </Icon>
    </>
}