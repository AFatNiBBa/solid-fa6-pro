
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-sliders` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-sliders?s=thin square-sliders}
 * @preview ![square-sliders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIgMTc2SDM3NkMzODAuNDA2IDE3NiAzODQgMTcyLjQyMiAzODQgMTY4UzM4MC40MDYgMTYwIDM3NiAxNjBIMjMyQzIyNy41OTQgMTYwIDIyNCAxNjMuNTc4IDIyNCAxNjhTMjI3LjU5NCAxNzYgMjMyIDE3NlpNMTYwLjAxNCAyMzJDMTc3LjY4NyAyMzIgMTkyLjAxNCAyMTcuNjcyIDE5Mi4wMTQgMjAwVjEzNkMxOTIuMDE0IDExOC4zMjYgMTc3LjY4NyAxMDQgMTYwLjAxNCAxMDRTMTI4LjAxNCAxMTguMzI2IDEyOC4wMTQgMTM2VjE2MC4wMDZDMTI4LjAwOCAxNjAuMDA2IDEyOC4wMDYgMTYwIDEyOCAxNjBINzJDNjcuNTk0IDE2MCA2NCAxNjMuNTc4IDY0IDE2OFM2Ny41OTQgMTc2IDcyIDE3NkgxMjhDMTI4LjAwNiAxNzYgMTI4LjAwOCAxNzUuOTk0IDEyOC4wMTQgMTc1Ljk5NFYyMDBDMTI4LjAxNCAyMTcuNjcyIDE0Mi4zNCAyMzIgMTYwLjAxNCAyMzJaTTE2MC4wMTQgMjE2QzE1MS4xOTEgMjE2IDE0NC4wMTQgMjA4LjgyMiAxNDQuMDE0IDIwMFYxMzZDMTQ0LjAxNCAxMjcuMTc4IDE1MS4xOTEgMTIwIDE2MC4wMTQgMTIwUzE3Ni4wMTQgMTI3LjE3OCAxNzYuMDE0IDEzNlYyMDBDMTc2LjAxNCAyMDguODIyIDE2OC44MzYgMjE2IDE2MC4wMTQgMjE2Wk0zMjggMzUySDM3NkMzODAuNDA2IDM1MiAzODQgMzQ4LjQyMiAzODQgMzQ0UzM4MC40MDYgMzM2IDM3NiAzMzZIMzI4QzMyMy41OTQgMzM2IDMyMCAzMzkuNTc4IDMyMCAzNDRTMzIzLjU5NCAzNTIgMzI4IDM1MlpNMjU2IDQwOEMyNzMuNjc0IDQwOCAyODggMzkzLjY3MiAyODggMzc2VjMxMkMyODggMjk0LjMyNiAyNzMuNjc0IDI4MCAyNTYgMjgwUzIyNCAyOTQuMzI2IDIyNCAzMTJWMzM2SDcyQzY3LjU5NCAzMzYgNjQgMzM5LjU3OCA2NCAzNDRTNjcuNTk0IDM1MiA3MiAzNTJIMjI0VjM3NkMyMjQgMzkzLjY3MiAyMzguMzI2IDQwOCAyNTYgNDA4Wk0yNTYgMzkyQzI0Ny4xNzggMzkyIDI0MCAzODQuODIyIDI0MCAzNzZWMzEyQzI0MCAzMDMuMTc4IDI0Ny4xNzggMjk2IDI1NiAyOTZTMjcyIDMwMy4xNzggMjcyIDMxMlYzNzZDMjcyIDM4NC44MjIgMjY0LjgyMiAzOTIgMjU2IDM5MlpNNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0OCA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTQgNDgwIDY0IDQ4MFpNNjQgNDY0QzM3LjUzMyA0NjQgMTYgNDQyLjQ2NyAxNiA0MTZWOTZDMTYgNjkuNTMzIDM3LjUzMyA0OCA2NCA0OEgzODRDNDEwLjQ2NyA0OCA0MzIgNjkuNTMzIDQzMiA5NlY0MTZDNDMyIDQ0Mi40NjcgNDEwLjQ2NyA0NjQgMzg0IDQ2NEg2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareSliders(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M232 176H376C380.406 176 384 172.422 384 168S380.406 160 376 160H232C227.594 160 224 163.578 224 168S227.594 176 232 176ZM160.014 232C177.687 232 192.014 217.672 192.014 200V136C192.014 118.326 177.687 104 160.014 104S128.014 118.326 128.014 136V160.006C128.008 160.006 128.006 160 128 160H72C67.594 160 64 163.578 64 168S67.594 176 72 176H128C128.006 176 128.008 175.994 128.014 175.994V200C128.014 217.672 142.34 232 160.014 232ZM160.014 216C151.191 216 144.014 208.822 144.014 200V136C144.014 127.178 151.191 120 160.014 120S176.014 127.178 176.014 136V200C176.014 208.822 168.836 216 160.014 216ZM328 352H376C380.406 352 384 348.422 384 344S380.406 336 376 336H328C323.594 336 320 339.578 320 344S323.594 352 328 352ZM256 408C273.674 408 288 393.672 288 376V312C288 294.326 273.674 280 256 280S224 294.326 224 312V336H72C67.594 336 64 339.578 64 344S67.594 352 72 352H224V376C224 393.672 238.326 408 256 408ZM256 392C247.178 392 240 384.822 240 376V312C240 303.178 247.178 296 256 296S272 303.178 272 312V376C272 384.822 264.822 392 256 392ZM64 480H384C419.346 480 448 451.348 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.348 28.654 480 64 480ZM64 464C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416C432 442.467 410.467 464 384 464H64Z" />
        </Icon>
    </>
}