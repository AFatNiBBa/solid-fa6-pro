
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brake-warning` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=duotone brake-warning}
 * @preview ![brake-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAzMkMxOTYuMjUgMzIgOTYgMTMyLjI1IDk2IDI1NlMxOTYuMjUgNDgwIDMyMCA0ODBTNTQ0IDM3OS43NSA1NDQgMjU2UzQ0My43NSAzMiAzMjAgMzJaTTI5NiAxNTJDMjk2IDEzOC43NSAzMDYuNzUgMTI4IDMyMCAxMjhTMzQ0IDEzOC43NSAzNDQgMTUyVjI2NEMzNDQgMjc3LjI1IDMzMy4yNSAyODggMzIwIDI4OFMyOTYgMjc3LjI1IDI5NiAyNjRWMTUyWk0zMjAgMzg0QzMwMi4zMjggMzg0IDI4OCAzNjkuNjcyIDI4OCAzNTJDMjg4IDMzNC4zMjYgMzAyLjMyOCAzMjAgMzIwIDMyMFMzNTIgMzM0LjMyNiAzNTIgMzUyQzM1MiAzNjkuNjcyIDMzNy42NzIgMzg0IDMyMCAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyMCAyODhDMzMzLjI1IDI4OCAzNDQgMjc3LjI1IDM0NCAyNjRWMTUyQzM0NCAxMzguNzUgMzMzLjI1IDEyOCAzMjAgMTI4UzI5NiAxMzguNzUgMjk2IDE1MlYyNjRDMjk2IDI3Ny4yNSAzMDYuNzUgMjg4IDMyMCAyODhaTTgzLjkzOCA3NS44MjhDNzIuNzE5IDY4LjYwOSA1Ny45MDYgNzEuODc1IDUwLjc1IDgzQzE3LjU2MiAxMzQuNTQ3IDAgMTk0LjM1OSAwIDI1NlMxNy41NjIgMzc3LjQ1MyA1MC43NSA0MjlDNTUuMzQ0IDQzNi4xMjUgNjMuMDYyIDQ0MCA3MC45NjkgNDQwQzc1LjQwNiA0NDAgNzkuOTA2IDQzOC43NjYgODMuOTM3IDQzNi4xNzJDOTUuMDk0IDQyOSA5OC4yODEgNDE0LjE0MSA5MS4xMjUgNDAzQzYyLjkwNiAzNTkuMjE5IDQ4IDMwOC4zOTEgNDggMjU2UzYyLjkwNiAxNTIuNzgxIDkxLjEyNSAxMDlDOTguMjgxIDk3Ljg1OSA5NS4wOTQgODMgODMuOTM4IDc1LjgyOFpNNTg5LjI1IDgzQzU4Mi4wOTQgNzEuODc1IDU2Ny4yNSA2OC42MDkgNTU2LjA2MiA3NS44MjhDNTQ0LjkwNiA4MyA1NDEuNzE5IDk3Ljg1OSA1NDguODc1IDEwOUM1NzcuMDk0IDE1Mi43ODEgNTkyIDIwMy42MDkgNTkyIDI1NlM1NzcuMDk0IDM1OS4yMTkgNTQ4Ljg3NSA0MDNDNTQxLjcxOSA0MTQuMTQxIDU0NC45MDYgNDI5IDU1Ni4wNjMgNDM2LjE3MkM1NjAuMDk0IDQzOC43NjYgNTY0LjU5NCA0NDAgNTY5LjAzMSA0NDBDNTc2LjkzOCA0NDAgNTg0LjY1NiA0MzYuMTI1IDU4OS4yNSA0MjlDNjIyLjQzOCAzNzcuNDUzIDY0MCAzMTcuNjQxIDY0MCAyNTZTNjIyLjQzOCAxMzQuNTQ3IDU4OS4yNSA4M1pNMzIwIDMyMEMzMDIuMzI4IDMyMCAyODggMzM0LjMyNiAyODggMzUyQzI4OCAzNjkuNjcyIDMwMi4zMjggMzg0IDMyMCAzODRTMzUyIDM2OS42NzIgMzUyIDM1MkMzNTIgMzM0LjMyNiAzMzcuNjcyIDMyMCAzMjAgMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BrakeWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M320 32C196.25 32 96 132.25 96 256S196.25 480 320 480S544 379.75 544 256S443.75 32 320 32ZM296 152C296 138.75 306.75 128 320 128S344 138.75 344 152V264C344 277.25 333.25 288 320 288S296 277.25 296 264V152ZM320 384C302.328 384 288 369.672 288 352C288 334.326 302.328 320 320 320S352 334.326 352 352C352 369.672 337.672 384 320 384Z" />
            <path d="M320 288C333.25 288 344 277.25 344 264V152C344 138.75 333.25 128 320 128S296 138.75 296 152V264C296 277.25 306.75 288 320 288ZM83.938 75.828C72.719 68.609 57.906 71.875 50.75 83C17.562 134.547 0 194.359 0 256S17.562 377.453 50.75 429C55.344 436.125 63.062 440 70.969 440C75.406 440 79.906 438.766 83.937 436.172C95.094 429 98.281 414.141 91.125 403C62.906 359.219 48 308.391 48 256S62.906 152.781 91.125 109C98.281 97.859 95.094 83 83.938 75.828ZM589.25 83C582.094 71.875 567.25 68.609 556.062 75.828C544.906 83 541.719 97.859 548.875 109C577.094 152.781 592 203.609 592 256S577.094 359.219 548.875 403C541.719 414.141 544.906 429 556.063 436.172C560.094 438.766 564.594 440 569.031 440C576.938 440 584.656 436.125 589.25 429C622.438 377.453 640 317.641 640 256S622.438 134.547 589.25 83ZM320 320C302.328 320 288 334.326 288 352C288 369.672 302.328 384 320 384S352 369.672 352 352C352 334.326 337.672 320 320 320Z" />
        </Icon>
    </>
}