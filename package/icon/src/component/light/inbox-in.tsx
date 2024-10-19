
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `inbox-in` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=light inbox-in}
 * @preview ![inbox-in](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDQuNjg4IDMxNS4zMTJDMjQ3LjgxMiAzMTguNDM4IDI1MS45MDYgMzIwIDI1NiAzMjBTMjY0LjE4OCAzMTguNDM4IDI2Ny4zMTIgMzE1LjMxMkwzNzkuMzEyIDIwMy4zMTJDMzg1LjU2MiAxOTcuMDYyIDM4NS41NjIgMTg2LjkzNyAzNzkuMzEyIDE4MC42ODhTMzYyLjkzNyAxNzQuNDM4IDM1Ni42ODggMTgwLjY4OEwyNzIgMjY1LjM3NVYxNkMyNzIgNy4xNTYgMjY0Ljg0NCAwIDI1NiAwUzI0MCA3LjE1NiAyNDAgMTZWMjY1LjM3NUwxNTUuMzEyIDE4MC42ODhDMTQ5LjA2MiAxNzQuNDM4IDEzOC45MzcgMTc0LjQzOCAxMzIuNjg4IDE4MC42ODhTMTI2LjQzOCAxOTcuMDYzIDEzMi42ODggMjAzLjMxMkwyNDQuNjg4IDMxNS4zMTJaTTQ2NCAzMjBIMzgzLjk5OEMzNzcuOTM4IDMyMCAzNzIuMzk4IDMyMy40MjQgMzY5LjY4OCAzMjguODQ0TDM0Mi4xMDkgMzg0SDE2OS44OTFMMTQyLjMxNCAzMjguODQ2QzEzOS42MDQgMzIzLjQyNCAxMzQuMDYyIDMyMCAxMjggMzIwSDQ4QzIxLjQ5IDMyMCAwIDM0MS40OSAwIDM2OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkg0NjRDNDkwLjUxIDUxMiA1MTIgNDkwLjUxIDUxMiA0NjRWMzY4QzUxMiAzNDEuNDkgNDkwLjUxIDMyMCA0NjQgMzIwWk00ODAgNDY0QzQ4MCA0NzIuODM2IDQ3Mi44MzggNDgwIDQ2NCA0ODBINDhDMzkuMTY0IDQ4MCAzMiA0NzIuODM2IDMyIDQ2NFYzNjhDMzIgMzU5LjE2NCAzOS4xNjQgMzUyIDQ4IDM1MkgxMTguMTA5TDE0NS42ODggNDA3LjE1NkMxNDguMzk4IDQxMi41NzYgMTUzLjkzOCA0MTYgMTU5Ljk5OCA0MTZIMzUyQzM1OC4wNjIgNDE2IDM2My42MDQgNDEyLjU3NiAzNjYuMzE0IDQwNy4xNTRMMzkzLjg5MSAzNTJINDY0QzQ3Mi44MzggMzUyIDQ4MCAzNTkuMTY0IDQ4MCAzNjhWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function InboxIn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M244.688 315.312C247.812 318.438 251.906 320 256 320S264.188 318.438 267.312 315.312L379.312 203.312C385.562 197.062 385.562 186.937 379.312 180.688S362.937 174.438 356.688 180.688L272 265.375V16C272 7.156 264.844 0 256 0S240 7.156 240 16V265.375L155.312 180.688C149.062 174.438 138.937 174.438 132.688 180.688S126.438 197.063 132.688 203.312L244.688 315.312ZM464 320H383.998C377.938 320 372.398 323.424 369.688 328.844L342.109 384H169.891L142.314 328.846C139.604 323.424 134.062 320 128 320H48C21.49 320 0 341.49 0 368V464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464V368C512 341.49 490.51 320 464 320ZM480 464C480 472.836 472.838 480 464 480H48C39.164 480 32 472.836 32 464V368C32 359.164 39.164 352 48 352H118.109L145.688 407.156C148.398 412.576 153.938 416 159.998 416H352C358.062 416 363.604 412.576 366.314 407.154L393.891 352H464C472.838 352 480 359.164 480 368V464Z" />
        </Icon>
    </>
}