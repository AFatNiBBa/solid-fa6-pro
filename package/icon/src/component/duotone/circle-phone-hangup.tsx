
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-phone-hangup` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-hangup?s=duotone circle-phone-hangup}
 * @preview ![circle-phone-hangup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyNTZDNDk2IDEyMy40NTEgMzg4LjU0OSAxNiAyNTYgMTZTMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2Wk0zNzMuNTA0IDMwNi4xNDlMMzE4LjcwNyAyODQuMjMzQzMxMi4yMzMgMjgxLjY3IDMwOC4yMzkgMjc1LjA0NiAzMDguOTc5IDI2OC4xNjNMMzEyLjQzMiAyMzMuNTY1QzI3NS45MjcgMjIxLjEwMiAyMzYuMTI1IDIyMS4wOTYgMTk5LjYzNyAyMzMuNTUzTDIwMy4wNzcgMjY4LjE3NUMyMDMuNzc0IDI3NS4wODEgMTk5LjgxMyAyODEuNjM4IDE5My4zNzEgMjg0LjIzNUwxMzguNTM3IDMwNi4xNjZDMTMxLjQ2NiAzMDguOTI4IDEyMy40NCAzMDYuMjkzIDExOS40NTEgMjk5Ljg5Nkw5Mi4wNDkgMjU2LjA1NEM4OC4xNiAyNDkuODY3IDg5LjA2NiAyNDEuOTEyIDk0LjI0OCAyMzYuNzNDMTgzLjQ0NCAxNDcuNTM0IDMyOC41NjMgMTQ3LjU0MSA0MTcuNzQ3IDIzNi43MjRDNDIyLjkzNCAyNDEuOTEyIDQyMy44NDEgMjQ5Ljg2OCA0MTkuOTU4IDI1Ni4wNjFMMzkyLjU0NiAyOTkuOTEyQzM4OC41OCAzMDYuMjY1IDM4MC41NDIgMzA4Ljk0NSAzNzMuNTA0IDMwNi4xNDlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM3My44NTYgMzA2LjE0OUwzMTkuMDYgMjg0LjIzM0MzMTIuNTg1IDI4MS42NyAzMDguNTkxIDI3NS4wNDYgMzA5LjMzMSAyNjguMTYzTDMxMi43ODQgMjMzLjU2NUMyNzYuMjggMjIxLjEwMiAyMzYuNDc3IDIyMS4wOTYgMTk5Ljk4OSAyMzMuNTUzTDIwMy40MyAyNjguMTc1QzIwNC4xMjYgMjc1LjA4MSAyMDAuMTY1IDI4MS42MzggMTkzLjcyNCAyODQuMjM1TDEzOC44OSAzMDYuMTY2QzEzMS44MTkgMzA4LjkyOCAxMjMuNzkyIDMwNi4yOTMgMTE5LjgwMyAyOTkuODk2TDkyLjQwMiAyNTYuMDU0Qzg4LjUxMiAyNDkuODY3IDg5LjQxOCAyNDEuOTEyIDk0LjYgMjM2LjczQzE4My43OTYgMTQ3LjUzNCAzMjguOTE1IDE0Ny41NDEgNDE4LjA5OSAyMzYuNzI0QzQyMy4yODYgMjQxLjkxMiA0MjQuMTkzIDI0OS44NjggNDIwLjMxIDI1Ni4wNjFMMzkyLjg5OCAyOTkuOTEyQzM4OC45MzIgMzA2LjI2NSAzODAuODk0IDMwOC45NDUgMzczLjg1NiAzMDYuMTQ5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CirclePhoneHangup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM373.504 306.149L318.707 284.233C312.233 281.67 308.239 275.046 308.979 268.163L312.432 233.565C275.927 221.102 236.125 221.096 199.637 233.553L203.077 268.175C203.774 275.081 199.813 281.638 193.371 284.235L138.537 306.166C131.466 308.928 123.44 306.293 119.451 299.896L92.049 256.054C88.16 249.867 89.066 241.912 94.248 236.73C183.444 147.534 328.563 147.541 417.747 236.724C422.934 241.912 423.841 249.868 419.958 256.061L392.546 299.912C388.58 306.265 380.542 308.945 373.504 306.149Z" />
            <path d="M373.856 306.149L319.06 284.233C312.585 281.67 308.591 275.046 309.331 268.163L312.784 233.565C276.28 221.102 236.477 221.096 199.989 233.553L203.43 268.175C204.126 275.081 200.165 281.638 193.724 284.235L138.89 306.166C131.819 308.928 123.792 306.293 119.803 299.896L92.402 256.054C88.512 249.867 89.418 241.912 94.6 236.73C183.796 147.534 328.915 147.541 418.099 236.724C423.286 241.912 424.193 249.868 420.31 256.061L392.898 299.912C388.932 306.265 380.894 308.945 373.856 306.149Z" />
        </Icon>
    </>
}