
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-gear` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-gear?s=light folder-gear}
 * @preview ![folder-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjcyTDIyNi43NDYgNTAuNzQ2QzIxNC43NDIgMzguNzQyIDE5OC40NjUgMzIgMTgxLjQ5IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NiAwIDk2VjQxNkMwIDQ1MS4zNDQgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ0IDUxMiA0MTZWMTYwQzUxMiAxMjQuNjU2IDQ4My4zNDYgOTYgNDQ4IDk2Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDE4MS40OUMxOTAuMDM5IDY0IDE5OC4wNzQgNjcuMzI4IDIwNC4xMTcgNzMuMzc1TDI1OC43NDYgMTI4SDQ0OEM0NjUuNjQ1IDEyOCA0ODAgMTQyLjM1NSA0ODAgMTYwVjQxNlpNMzUzIDIzMkMzNDguNTYyIDIyNC4zNDQgMzM4Ljc4MSAyMjEuNjg4IDMzMS4xNDEgMjI2LjE1NkwzMTUuNTgyIDIzNS4xMzdDMzA0LjI5NyAyMjIuNDMgMjg5LjI2OCAyMTMuMTM3IDI3MiAyMDkuNjE3VjE5MkMyNzIgMTgzLjE1NiAyNjQuODQ0IDE3NiAyNTYgMTc2UzI0MCAxODMuMTU2IDI0MCAxOTJWMjA5LjYxN0MyMjIuNzMyIDIxMy4xMzcgMjA3LjcwMyAyMjIuNDMgMTk2LjQxOCAyMzUuMTM3TDE4MC44NTkgMjI2LjE1NkMxNzMuMjAzIDIyMS42ODggMTYzLjQyMiAyMjQuMzQ0IDE1OSAyMzJTMTU3LjIwMyAyNDkuNDM4IDE2NC44NTkgMjUzLjg0NEwxODAuNDQ1IDI2Mi44NEMxNzcuNzg1IDI3MC43OTcgMTc2IDI3OS4xNTYgMTc2IDI4OFMxNzcuNzg1IDMwNS4yMDMgMTgwLjQ0NSAzMTMuMTZMMTY0Ljg1OSAzMjIuMTU2QzE1Ny4yMDMgMzI2LjU2MiAxNTQuNTc4IDMzNi4zNDQgMTU5IDM0NEMxNjEuOTY5IDM0OS4xMjUgMTY3LjM0NCAzNTIgMTcyLjg3NSAzNTJDMTc1LjU5NCAzNTIgMTc4LjM0NCAzNTEuMzEyIDE4MC44NTkgMzQ5Ljg0NEwxOTYuNDE4IDM0MC44NjNDMjA3LjcwMyAzNTMuNTcgMjIyLjczMiAzNjIuODYzIDI0MCAzNjYuMzgzVjM4NEMyNDAgMzkyLjg0NCAyNDcuMTU2IDQwMCAyNTYgNDAwUzI3MiAzOTIuODQ0IDI3MiAzODRWMzY2LjM4M0MyODkuMjY4IDM2Mi44NjMgMzA0LjI5NyAzNTMuNTcgMzE1LjU4MiAzNDAuODYzTDMzMS4xNDEgMzQ5Ljg0NEMzMzMuNjU2IDM1MS4zMTIgMzM2LjQwNiAzNTIgMzM5LjEyNSAzNTJDMzQ0LjY1NiAzNTIgMzUwLjAzMSAzNDkuMTI1IDM1MyAzNDRDMzU3LjQyMiAzMzYuMzQ0IDM1NC43OTcgMzI2LjU2MiAzNDcuMTQxIDMyMi4xNTZMMzMxLjU1NSAzMTMuMTZDMzM0LjIxNSAzMDUuMjAzIDMzNiAyOTYuODQ0IDMzNiAyODhTMzM0LjIxNSAyNzAuNzk3IDMzMS41NTUgMjYyLjg0TDM0Ny4xNDEgMjUzLjg0NEMzNTQuNzk3IDI0OS40MzggMzU3LjQyMiAyMzkuNjU2IDM1MyAyMzJaTTI1NiAzMzZDMjI5LjUzMSAzMzYgMjA4IDMxNC40NjkgMjA4IDI4OFMyMjkuNTMxIDI0MCAyNTYgMjQwUzMwNCAyNjEuNTMxIDMwNCAyODhTMjgyLjQ2OSAzMzYgMjU2IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L258.746 128H448C465.645 128 480 142.355 480 160V416ZM353 232C348.562 224.344 338.781 221.688 331.141 226.156L315.582 235.137C304.297 222.43 289.268 213.137 272 209.617V192C272 183.156 264.844 176 256 176S240 183.156 240 192V209.617C222.732 213.137 207.703 222.43 196.418 235.137L180.859 226.156C173.203 221.688 163.422 224.344 159 232S157.203 249.438 164.859 253.844L180.445 262.84C177.785 270.797 176 279.156 176 288S177.785 305.203 180.445 313.16L164.859 322.156C157.203 326.562 154.578 336.344 159 344C161.969 349.125 167.344 352 172.875 352C175.594 352 178.344 351.312 180.859 349.844L196.418 340.863C207.703 353.57 222.732 362.863 240 366.383V384C240 392.844 247.156 400 256 400S272 392.844 272 384V366.383C289.268 362.863 304.297 353.57 315.582 340.863L331.141 349.844C333.656 351.312 336.406 352 339.125 352C344.656 352 350.031 349.125 353 344C357.422 336.344 354.797 326.562 347.141 322.156L331.555 313.16C334.215 305.203 336 296.844 336 288S334.215 270.797 331.555 262.84L347.141 253.844C354.797 249.438 357.422 239.656 353 232ZM256 336C229.531 336 208 314.469 208 288S229.531 240 256 240S304 261.531 304 288S282.469 336 256 336Z" />
        </Icon>
    </>
}