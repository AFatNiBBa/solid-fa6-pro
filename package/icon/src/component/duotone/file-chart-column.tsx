
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-chart-column` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-column?s=duotone file-chart-column}
 * @preview ![file-chart-column](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMTI4IDQzNS4yNUMxMjggNDQxLjYyNSAxMjEuNjI1IDQ0OCAxMTUuMjUgNDQ4SDc2Ljc1QzcwLjM3NSA0NDggNjQgNDQxLjYyNSA2NCA0MzUuMjVWMzY0Ljc1QzY0IDM1OC4zNzUgNzAuMzc1IDM1MiA3Ni43NSAzNTJIMTE1LjI1QzEyMS42MjUgMzUyIDEyOCAzNTguMzc1IDEyOCAzNjQuNzVWNDM1LjI1Wk0yMjQgNDM1LjI1QzIyNCA0NDEuNjI1IDIxNy42MjUgNDQ4IDIxMS4yNSA0NDhIMTcyLjc1QzE2Ni4zNzUgNDQ4IDE2MCA0NDEuNjI1IDE2MCA0MzUuMjVWMjM2Ljc1QzE2MCAyMzAuMzc1IDE2Ni4zNzUgMjI0IDE3Mi43NSAyMjRIMjExLjI1QzIxNy42MjUgMjI0IDIyNCAyMzAuMzc1IDIyNCAyMzYuNzVWNDM1LjI1Wk0zMjAgNDM1LjI1QzMyMCA0NDEuNjI1IDMxMy42MjUgNDQ4IDMwNy4yNSA0NDhIMjY4Ljc1QzI2Mi4zNzUgNDQ4IDI1NiA0NDEuNjI1IDI1NiA0MzUuMjVWMzAwLjc1QzI1NiAyOTQuMzc1IDI2Mi4zNzUgMjg4IDI2OC43NSAyODhIMzA3LjI1QzMxMy42MjUgMjg4IDMyMCAyOTQuMzc1IDMyMCAzMDAuNzVWNDM1LjI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMDcuMjUgMjg4SDI2OC43NUMyNjIuMzc1IDI4OCAyNTYgMjk0LjM3NSAyNTYgMzAwLjc1VjQzNS4yNUMyNTYgNDQxLjYyNSAyNjIuMzc1IDQ0OCAyNjguNzUgNDQ4SDMwNy4yNUMzMTMuNjI1IDQ0OCAzMjAgNDQxLjYyNSAzMjAgNDM1LjI1VjMwMC43NUMzMjAgMjk0LjM3NSAzMTMuNjI1IDI4OCAzMDcuMjUgMjg4Wk0xMTUuMjUgMzUySDc2Ljc1QzcwLjM3NSAzNTIgNjQgMzU4LjM3NSA2NCAzNjQuNzVWNDM1LjI1QzY0IDQ0MS42MjUgNzAuMzc1IDQ0OCA3Ni43NSA0NDhIMTE1LjI1QzEyMS42MjUgNDQ4IDEyOCA0NDEuNjI1IDEyOCA0MzUuMjVWMzY0Ljc1QzEyOCAzNTguMzc1IDEyMS42MjUgMzUyIDExNS4yNSAzNTJaTTIxMS4yNSAyMjRIMTcyLjc1QzE2Ni4zNzUgMjI0IDE2MCAyMzAuMzc1IDE2MCAyMzYuNzVWNDM1LjI1QzE2MCA0NDEuNjI1IDE2Ni4zNzUgNDQ4IDE3Mi43NSA0NDhIMjExLjI1QzIxNy42MjUgNDQ4IDIyNCA0NDEuNjI1IDIyNCA0MzUuMjVWMjM2Ljc1QzIyNCAyMzAuMzc1IDIxNy42MjUgMjI0IDIxMS4yNSAyMjRaTTI1NiAwVjEyOEgzODRMMjU2IDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileChartColumn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM128 435.25C128 441.625 121.625 448 115.25 448H76.75C70.375 448 64 441.625 64 435.25V364.75C64 358.375 70.375 352 76.75 352H115.25C121.625 352 128 358.375 128 364.75V435.25ZM224 435.25C224 441.625 217.625 448 211.25 448H172.75C166.375 448 160 441.625 160 435.25V236.75C160 230.375 166.375 224 172.75 224H211.25C217.625 224 224 230.375 224 236.75V435.25ZM320 435.25C320 441.625 313.625 448 307.25 448H268.75C262.375 448 256 441.625 256 435.25V300.75C256 294.375 262.375 288 268.75 288H307.25C313.625 288 320 294.375 320 300.75V435.25Z" />
            <path d="M307.25 288H268.75C262.375 288 256 294.375 256 300.75V435.25C256 441.625 262.375 448 268.75 448H307.25C313.625 448 320 441.625 320 435.25V300.75C320 294.375 313.625 288 307.25 288ZM115.25 352H76.75C70.375 352 64 358.375 64 364.75V435.25C64 441.625 70.375 448 76.75 448H115.25C121.625 448 128 441.625 128 435.25V364.75C128 358.375 121.625 352 115.25 352ZM211.25 224H172.75C166.375 224 160 230.375 160 236.75V435.25C160 441.625 166.375 448 172.75 448H211.25C217.625 448 224 441.625 224 435.25V236.75C224 230.375 217.625 224 211.25 224ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}