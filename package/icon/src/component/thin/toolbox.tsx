
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toolbox` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=thin toolbox}
 * @preview ![toolbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI3IDIxNC42MjdMNDI1LjM3MyAxMzcuMzczQzQxOS4zNzEgMTMxLjM3MSA0MTEuMjMyIDEyOCA0MDIuNzQ2IDEyOEgzODRWNzJDMzg0IDQ5LjkzOCAzNjYuMDYyIDMyIDM0NCAzMkgxNjhDMTQ1LjkzOCAzMiAxMjggNDkuOTM4IDEyOCA3MlYxMjhIMTA5LjI1NEMxMDAuNzY4IDEyOCA5Mi42MjkgMTMxLjM3MSA4Ni42MjcgMTM3LjM3M0w5LjM3MyAyMTQuNjI3QzMuMzcxIDIyMC42MjkgMCAyMjguNzY4IDAgMjM3LjI1NFY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ2IDQ4MCA1MTIgNDUxLjM0NiA1MTIgNDE2VjIzNy4yNTRDNTEyIDIyOC43NjggNTA4LjYyOSAyMjAuNjI5IDUwMi42MjcgMjE0LjYyN1pNMTQ0IDcyQzE0NCA1OC43NjYgMTU0Ljc4MSA0OCAxNjggNDhIMzQ0QzM1Ny4yMTkgNDggMzY4IDU4Ljc2NiAzNjggNzJWMTI4SDE0NFY3MlpNNDk2IDQxNkM0OTYgNDQyLjQ2NyA0NzQuNDY3IDQ2NCA0NDggNDY0SDY0QzM3LjUzMyA0NjQgMTYgNDQyLjQ2NyAxNiA0MTZWMzI4SDE1MlYzNzZDMTUyIDM4MC40MjIgMTU1LjU5NCAzODQgMTYwIDM4NFMxNjggMzgwLjQyMiAxNjggMzc2VjMyOEgzNDRWMzc2QzM0NCAzODAuNDIyIDM0Ny41OTQgMzg0IDM1MiAzODRTMzYwIDM4MC40MjIgMzYwIDM3NlYzMjhINDk2VjQxNlpNNDk2IDMxMkgzNjBWMjY0QzM2MCAyNTkuNTc4IDM1Ni40MDYgMjU2IDM1MiAyNTZTMzQ0IDI1OS41NzggMzQ0IDI2NFYzMTJIMTY4VjI2NEMxNjggMjU5LjU3OCAxNjQuNDA2IDI1NiAxNjAgMjU2UzE1MiAyNTkuNTc4IDE1MiAyNjRWMzEySDE2VjIzNy4yNTRDMTYgMjMyLjk4IDE3LjY2NCAyMjguOTYzIDIwLjY4OCAyMjUuOTQxTDk3LjkzOSAxNDguNjg4QzEwMC45NjMgMTQ1LjY2NCAxMDQuOTggMTQ0IDEwOS4yNTQgMTQ0SDQwMi43NDZDNDA3LjAyIDE0NCA0MTEuMDM3IDE0NS42NjQgNDE0LjA1OSAxNDguNjg2TDQ5MS4zMTQgMjI1Ljk0MUM0OTQuMzM2IDIyOC45NjMgNDk2IDIzMi45OCA0OTYgMjM3LjI1NFYzMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Toolbox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.627 214.627L425.373 137.373C419.371 131.371 411.232 128 402.746 128H384V72C384 49.938 366.062 32 344 32H168C145.938 32 128 49.938 128 72V128H109.254C100.768 128 92.629 131.371 86.627 137.373L9.373 214.627C3.371 220.629 0 228.768 0 237.254V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V237.254C512 228.768 508.629 220.629 502.627 214.627ZM144 72C144 58.766 154.781 48 168 48H344C357.219 48 368 58.766 368 72V128H144V72ZM496 416C496 442.467 474.467 464 448 464H64C37.533 464 16 442.467 16 416V328H152V376C152 380.422 155.594 384 160 384S168 380.422 168 376V328H344V376C344 380.422 347.594 384 352 384S360 380.422 360 376V328H496V416ZM496 312H360V264C360 259.578 356.406 256 352 256S344 259.578 344 264V312H168V264C168 259.578 164.406 256 160 256S152 259.578 152 264V312H16V237.254C16 232.98 17.664 228.963 20.688 225.941L97.939 148.688C100.963 145.664 104.98 144 109.254 144H402.746C407.02 144 411.037 145.664 414.059 148.686L491.314 225.941C494.336 228.963 496 232.98 496 237.254V312Z" />
        </Icon>
    </>
}