
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `virus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=duotone virus}
 * @preview ![virus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxNS41NTUgMjI3LjU1NUg0OTQuMDA4QzQ0My4zMjYgMjI3LjU1NSA0MTcuOTQzIDE2Ni4yNzggNDUzLjc4MSAxMzAuNDRMNDY5LjAyNyAxMTUuMTk0QzQ4MC4xMzkgMTA0LjA4MyA0ODAuMTM5IDg2LjA4MyA0NjkuMDI3IDc0Ljk3M0M0NTcuOTE2IDYzLjg2MiA0MzkuOTE2IDYzLjg2MiA0MjguODA1IDc0Ljk3M0w0MTMuNTYxIDkwLjIxN0MzNzcuNzIzIDEyNi4wNTUgMzE2LjQ0NSAxMDAuNjc0IDMxNi40NDUgNDkuOTkxVjI4LjQ0NEMzMTYuNDQ1IDEyLjcyMyAzMDMuNzIzIDAuMDAxIDI4OCAwLjAwMVMyNTkuNTU1IDEyLjcyMyAyNTkuNTU1IDI4LjQ0NFY0OS45OTFDMjU5LjU1NSAxMDAuNjc0IDE5OC4yNzcgMTI2LjA1NSAxNjIuNDM5IDkwLjIxN0wxNDcuMTk1IDc0Ljk3M0MxMzYuMDg0IDYzLjg2MiAxMTguMDg0IDYzLjg2MiAxMDYuOTczIDc0Ljk3M0M5NS44NjEgODYuMDgzIDk1Ljg2MSAxMDQuMDgzIDEwNi45NzMgMTE1LjE5NEwxMjIuMjE5IDEzMC40NEMxNTguMDU3IDE2Ni4yNzggMTMyLjY3NCAyMjcuNTU1IDgxLjk5MiAyMjcuNTU1SDYwLjQ0NUM0NC43MjMgMjI3LjU1NSAzMiAyNDAuMjc4IDMyIDI1Ni4wMDFTNDQuNzIzIDI4NC40NDQgNjAuNDQ1IDI4NC40NDRIODEuOTkyQzEzMi42NzQgMjg0LjQ0NCAxNTguMDU3IDM0NS43MjEgMTIyLjIxOSAzODEuNTU5TDEwNi45NzMgMzk2LjgwNUM5NS44NjEgNDA3LjkxNyA5NS44NjEgNDI1LjkxNyAxMDYuOTczIDQzNy4wMjhDMTEyLjUyNyA0NDIuNTgzIDExOS44MDUgNDQ1LjM2MiAxMjcuMDg0IDQ0NS4zNjJDMTM0LjM2MSA0NDUuMzYyIDE0MS42MzkgNDQyLjU4MyAxNDcuMTk1IDQzNy4wMjhMMTYyLjQzOSA0MjEuNzgyQzE5OC4yNzcgMzg1Ljk0NCAyNTkuNTU1IDQxMS4zMjcgMjU5LjU1NSA0NjIuMDA4VjQ4My41NTVDMjU5LjU1NSA0OTkuMjc4IDI3Mi4yNzcgNTEyLjAwMSAyODggNTEyLjAwMVMzMTYuNDQ1IDQ5OS4yNzggMzE2LjQ0NSA0ODMuNTU1VjQ2Mi4wMDhDMzE2LjQ0NSA0MTEuMzI3IDM3Ny43MjMgMzg1Ljk0NCA0MTMuNTYxIDQyMS43ODJMNDI4LjgwNSA0MzcuMDI4QzQzNC4zNjEgNDQyLjU4MyA0NDEuNjM5IDQ0NS4zNjIgNDQ4LjkxNiA0NDUuMzYyQzQ1Ni4xOTUgNDQ1LjM2MiA0NjMuNDczIDQ0Mi41ODMgNDY5LjAyNyA0MzcuMDI4QzQ4MC4xMzkgNDI1LjkxNyA0ODAuMTM5IDQwNy45MTcgNDY5LjAyNyAzOTYuODA1TDQ1My43ODEgMzgxLjU1OUM0MTcuOTQzIDM0NS43MjEgNDQzLjMyNiAyODQuNDQ0IDQ5NC4wMDggMjg0LjQ0NEg1MTUuNTU1QzUzMS4yNzcgMjg0LjQ0NCA1NDQgMjcxLjcyMyA1NDQgMjU2LjAwMVM1MzEuMjc3IDIyNy41NTUgNTE1LjU1NSAyMjcuNTU1Wk0yNTYgMjcyLjAwMUMyMjkuNDkgMjcyLjAwMSAyMDggMjUwLjUxIDIwOCAyMjQuMDAxUzIyOS40OSAxNzYuMDAxIDI1NiAxNzYuMDAxUzMwNCAxOTcuNDkxIDMwNCAyMjQuMDAxUzI4Mi41MSAyNzIuMDAxIDI1NiAyNzIuMDAxWk0zMzYgMzI4LjAwMUMzMjIuNzQ2IDMyOC4wMDEgMzEyIDMxNy4yNTQgMzEyIDMwNC4wMDFDMzEyIDI5MC43NDUgMzIyLjc0NiAyODAuMDAxIDMzNiAyODAuMDAxUzM2MCAyOTAuNzQ1IDM2MCAzMDQuMDAxQzM2MCAzMTcuMjU0IDM0OS4yNTQgMzI4LjAwMSAzMzYgMzI4LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDI3Mi4wMDFDMjI5LjQ5IDI3Mi4wMDEgMjA4IDI1MC41MSAyMDggMjI0LjAwMVMyMjkuNDkgMTc2LjAwMSAyNTYgMTc2LjAwMVMzMDQgMTk3LjQ5MSAzMDQgMjI0LjAwMVMyODIuNTEgMjcyLjAwMSAyNTYgMjcyLjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Virus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M515.555 227.555H494.008C443.326 227.555 417.943 166.278 453.781 130.44L469.027 115.194C480.139 104.083 480.139 86.083 469.027 74.973C457.916 63.862 439.916 63.862 428.805 74.973L413.561 90.217C377.723 126.055 316.445 100.674 316.445 49.991V28.444C316.445 12.723 303.723 0.001 288 0.001S259.555 12.723 259.555 28.444V49.991C259.555 100.674 198.277 126.055 162.439 90.217L147.195 74.973C136.084 63.862 118.084 63.862 106.973 74.973C95.861 86.083 95.861 104.083 106.973 115.194L122.219 130.44C158.057 166.278 132.674 227.555 81.992 227.555H60.445C44.723 227.555 32 240.278 32 256.001S44.723 284.444 60.445 284.444H81.992C132.674 284.444 158.057 345.721 122.219 381.559L106.973 396.805C95.861 407.917 95.861 425.917 106.973 437.028C112.527 442.583 119.805 445.362 127.084 445.362C134.361 445.362 141.639 442.583 147.195 437.028L162.439 421.782C198.277 385.944 259.555 411.327 259.555 462.008V483.555C259.555 499.278 272.277 512.001 288 512.001S316.445 499.278 316.445 483.555V462.008C316.445 411.327 377.723 385.944 413.561 421.782L428.805 437.028C434.361 442.583 441.639 445.362 448.916 445.362C456.195 445.362 463.473 442.583 469.027 437.028C480.139 425.917 480.139 407.917 469.027 396.805L453.781 381.559C417.943 345.721 443.326 284.444 494.008 284.444H515.555C531.277 284.444 544 271.723 544 256.001S531.277 227.555 515.555 227.555ZM256 272.001C229.49 272.001 208 250.51 208 224.001S229.49 176.001 256 176.001S304 197.491 304 224.001S282.51 272.001 256 272.001ZM336 328.001C322.746 328.001 312 317.254 312 304.001C312 290.745 322.746 280.001 336 280.001S360 290.745 360 304.001C360 317.254 349.254 328.001 336 328.001Z" />
            <path d="M256 272.001C229.49 272.001 208 250.51 208 224.001S229.49 176.001 256 176.001S304 197.491 304 224.001S282.51 272.001 256 272.001Z" />
        </Icon>
    </>
}