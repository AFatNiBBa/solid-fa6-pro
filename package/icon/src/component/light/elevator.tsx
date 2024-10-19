
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `elevator` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=light elevator}
 * @preview ![elevator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjU0IDAgMTkyVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDQ4QzQ4My4zNDggNTEyIDUxMiA0ODMuMzQ2IDUxMiA0NDhWMTkyQzUxMiAxNTYuNjU0IDQ4My4zNDggMTI4IDQ0OCAxMjhaTTIwNi4yMjMgNDgwSDExMy43NzdWNDE2QzExMy43NzcgMzk4LjM1NSAxMjguMTMzIDM4NCAxNDUuNzc3IDM4NEgxNzQuMjIzQzE5MS44NjcgMzg0IDIwNi4yMjMgMzk4LjM1NSAyMDYuMjIzIDQxNlY0ODBaTTM5OC4yMjMgNDgwSDMwNS43NzdWNDE2QzMwNS43NzcgMzk4LjM1NSAzMjAuMTMzIDM4NCAzMzcuNzc3IDM4NEgzNjYuMjIzQzM4My44NjcgMzg0IDM5OC4yMjMgMzk4LjM1NSAzOTguMjIzIDQxNlY0ODBaTTQ4MCA0NDhDNDgwIDQ2NS42NDUgNDY1LjY0NSA0ODAgNDQ4IDQ4MEg0MzAuMjIzVjQxNkM0MzAuMjIzIDM4MC42NTQgNDAxLjU2OCAzNTIgMzY2LjIyMyAzNTJIMzM3Ljc3N0MzMDIuNDMyIDM1MiAyNzMuNzc3IDM4MC42NTQgMjczLjc3NyA0MTZWNDgwSDIzOC4yMjNWNDE2QzIzOC4yMjMgMzgwLjY1NCAyMDkuNTY4IDM1MiAxNzQuMjIzIDM1MkgxNDUuNzc3QzExMC40MzIgMzUyIDgxLjc3NyAzODAuNjU0IDgxLjc3NyA0MTZWNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWMTkyQzMyIDE3NC4zNTUgNDYuMzU1IDE2MCA2NCAxNjBINDQ4QzQ2NS42NDUgMTYwIDQ4MCAxNzQuMzU1IDQ4MCAxOTJWNDQ4Wk0xNjAgMjA4QzEyOS4wNTUgMjA4LjExNSAxMDQgMjMzLjEzNSAxMDQgMjY0UzEyOS4wNTUgMzE5Ljg4MyAxNjAgMzIwQzE5MC45NDUgMzE5Ljg4MyAyMTYgMjk0Ljg2NSAyMTYgMjY0UzE5MC45NDUgMjA4LjExNSAxNjAgMjA4Wk0xNjAuMTIxIDI4OEMxNDYuODIgMjg3Ljk0OSAxMzYgMjc3LjE4NCAxMzYgMjY0QzEzNiAyNTAuODU1IDE0Ni43NTYgMjQwLjExMyAxNjAgMjQwQzE3My4yNDYgMjQwLjExMyAxODQgMjUwLjg1NSAxODQgMjY0QzE4NCAyNzcuMTg0IDE3My4xOCAyODcuOTQ5IDE2MC4xMjEgMjg4Wk0zNTIgMjA4QzMyMS4wNTUgMjA4LjExNSAyOTYgMjMzLjEzNSAyOTYgMjY0UzMyMS4wNTUgMzE5Ljg4MyAzNTIgMzIwQzM4Mi45NDUgMzE5Ljg4MyA0MDggMjk0Ljg2NSA0MDggMjY0UzM4Mi45NDUgMjA4LjExNSAzNTIgMjA4Wk0zNTIuMTIxIDI4OEMzMzguODIgMjg3Ljk0OSAzMjggMjc3LjE4NCAzMjggMjY0QzMyOCAyNTAuODU1IDMzOC43NTYgMjQwLjExMyAzNTIgMjQwQzM2NS4yNDYgMjQwLjExMyAzNzYgMjUwLjg1NSAzNzYgMjY0QzM3NiAyNzcuMTg0IDM2NS4xOCAyODcuOTQ5IDM1Mi4xMjEgMjg4Wk05MS4zMTIgOTEuMzEyTDE0NCAzOC42MjVMMTk2LjY4OCA5MS4zMTJDMTk5LjgxMiA5NC40MzggMjAzLjkwNiA5NiAyMDggOTZTMjE2LjE4OCA5NC40MzggMjE5LjMxMiA5MS4zMTJDMjI1LjU2MiA4NS4wNjIgMjI1LjU2MiA3NC45MzcgMjE5LjMxMiA2OC42ODhMMTU1LjMxMiA0LjY4OEMxNDkuMDYyIC0xLjU2MiAxMzguOTM3IC0xLjU2MiAxMzIuNjg4IDQuNjg4TDY4LjY4OCA2OC42ODhDNjIuNDM4IDc0LjkzOCA2Mi40MzggODUuMDYzIDY4LjY4OCA5MS4zMTJTODUuMDYyIDk3LjU2MiA5MS4zMTIgOTEuMzEyWk0zNTYuNjg4IDkxLjMxMkMzNTkuODEyIDk0LjQzOCAzNjMuOTA2IDk2IDM2OCA5NlMzNzYuMTg4IDk0LjQzOCAzNzkuMzEyIDkxLjMxMkw0NDMuMzEyIDI3LjMxMkM0NDkuNTYyIDIxLjA2MiA0NDkuNTYyIDEwLjkzNyA0NDMuMzEyIDQuNjg4UzQyNi45MzcgLTEuNTYyIDQyMC42ODggNC42ODhMMzY4IDU3LjM3NUwzMTUuMzEyIDQuNjg4QzMwOS4wNjIgLTEuNTYyIDI5OC45MzcgLTEuNTYyIDI5Mi42ODggNC42ODhTMjg2LjQzOCAyMS4wNjMgMjkyLjY4OCAyNy4zMTJMMzU2LjY4OCA5MS4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Elevator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V192C512 156.654 483.348 128 448 128ZM206.223 480H113.777V416C113.777 398.355 128.133 384 145.777 384H174.223C191.867 384 206.223 398.355 206.223 416V480ZM398.223 480H305.777V416C305.777 398.355 320.133 384 337.777 384H366.223C383.867 384 398.223 398.355 398.223 416V480ZM480 448C480 465.645 465.645 480 448 480H430.223V416C430.223 380.654 401.568 352 366.223 352H337.777C302.432 352 273.777 380.654 273.777 416V480H238.223V416C238.223 380.654 209.568 352 174.223 352H145.777C110.432 352 81.777 380.654 81.777 416V480H64C46.355 480 32 465.645 32 448V192C32 174.355 46.355 160 64 160H448C465.645 160 480 174.355 480 192V448ZM160 208C129.055 208.115 104 233.135 104 264S129.055 319.883 160 320C190.945 319.883 216 294.865 216 264S190.945 208.115 160 208ZM160.121 288C146.82 287.949 136 277.184 136 264C136 250.855 146.756 240.113 160 240C173.246 240.113 184 250.855 184 264C184 277.184 173.18 287.949 160.121 288ZM352 208C321.055 208.115 296 233.135 296 264S321.055 319.883 352 320C382.945 319.883 408 294.865 408 264S382.945 208.115 352 208ZM352.121 288C338.82 287.949 328 277.184 328 264C328 250.855 338.756 240.113 352 240C365.246 240.113 376 250.855 376 264C376 277.184 365.18 287.949 352.121 288ZM91.312 91.312L144 38.625L196.688 91.312C199.812 94.438 203.906 96 208 96S216.188 94.438 219.312 91.312C225.562 85.062 225.562 74.937 219.312 68.688L155.312 4.688C149.062 -1.562 138.937 -1.562 132.688 4.688L68.688 68.688C62.438 74.938 62.438 85.063 68.688 91.312S85.062 97.562 91.312 91.312ZM356.688 91.312C359.812 94.438 363.906 96 368 96S376.188 94.438 379.312 91.312L443.312 27.312C449.562 21.062 449.562 10.937 443.312 4.688S426.937 -1.562 420.688 4.688L368 57.375L315.312 4.688C309.062 -1.562 298.937 -1.562 292.688 4.688S286.438 21.063 292.688 27.312L356.688 91.312Z" />
        </Icon>
    </>
}