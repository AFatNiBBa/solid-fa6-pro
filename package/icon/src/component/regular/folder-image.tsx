
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-image` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=regular folder-image}
 * @preview ![folder-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjc1Ljg4M0wyMjYuNzQ2IDUwLjc0NkMyMTQuNzQyIDM4Ljc0MiAxOTguNDY1IDMyIDE4MS40OSAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ2IDQ4MCA1MTIgNDUxLjM0NCA1MTIgNDE2VjE2MEM1MTIgMTI0LjY1NiA0ODMuMzQ2IDk2IDQ0OCA5NlpNNDY0IDQxNkM0NjQgNDI0LjgyNCA0NTYuODIyIDQzMiA0NDggNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyNCA0OCA0MTZWOTZDNDggODcuMTc2IDU1LjE3OCA4MCA2NCA4MEgxODEuNDlDMTg1Ljc2NCA4MCAxODkuNzgzIDgxLjY2NCAxOTIuODA1IDg0LjY4OEwyNTYgMTQ0SDQ0OEM0NTYuODIyIDE0NCA0NjQgMTUxLjE3NiA0NjQgMTYwVjQxNlpNMTI3Ljk4NiAyNDBDMTQ1LjY2IDI0MCAxNTkuOTg2IDIyNS42NzIgMTU5Ljk4NiAyMDhTMTQ1LjY2IDE3NiAxMjcuOTg2IDE3NlM5NS45ODYgMTkwLjMyOCA5NS45ODYgMjA4UzExMC4zMTIgMjQwIDEyNy45ODYgMjQwWk0zMDYuNjQ2IDIxNS4xMjVDMzAzLjY4IDIxMC42NzIgMjk4LjY4NCAyMDggMjkzLjMzNCAyMDhTMjgyLjk4OCAyMTAuNjcyIDI4MC4wMjEgMjE1LjEyNUwyMTcuMjgzIDMwOS4yMzRMMTk0LjkyOCAyNzguNTc0QzE5MS45MTYgMjc0LjQ0MSAxODcuMTExIDI3MiAxODIgMjcyQzE3Ni44ODkgMjcyIDE3Mi4wODQgMjc0LjQ0MSAxNjkuMDcyIDI3OC41NzRMOTkuMDcyIDM3NC41NzRDOTUuNTIzIDM3OS40MzcgOTUuMDA4IDM4NS44ODMgOTcuNzM4IDM5MS4yNUMxMDAuNDY3IDM5Ni42MjEgMTA1Ljk3OSA0MDAgMTEyIDQwMEg0MDBDNDA1LjkgNDAwIDQxMS4zMjIgMzk2Ljc1NCA0MTQuMTA3IDM5MS41NTFDNDE2Ljg5MSAzODYuMzQ4IDQxNi41ODYgMzgwLjAzNSA0MTMuMzEyIDM3NS4xMjVMMzA2LjY0NiAyMTUuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderImage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H181.49C185.764 80 189.783 81.664 192.805 84.688L256 144H448C456.822 144 464 151.176 464 160V416ZM127.986 240C145.66 240 159.986 225.672 159.986 208S145.66 176 127.986 176S95.986 190.328 95.986 208S110.312 240 127.986 240ZM306.646 215.125C303.68 210.672 298.684 208 293.334 208S282.988 210.672 280.021 215.125L217.283 309.234L194.928 278.574C191.916 274.441 187.111 272 182 272C176.889 272 172.084 274.441 169.072 278.574L99.072 374.574C95.523 379.437 95.008 385.883 97.738 391.25C100.467 396.621 105.979 400 112 400H400C405.9 400 411.322 396.754 414.107 391.551C416.891 386.348 416.586 380.035 413.312 375.125L306.646 215.125Z" />
        </Icon>
    </>
}