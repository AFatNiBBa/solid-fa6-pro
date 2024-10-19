
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-tree` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=duotone table-tree}
 * @preview ![table-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAzMjhWMjcwLjM4MUMxMzAuNjcyIDI3MC45NDUgMTMzLjE2NCAyNzIgMTM2IDI3MkgxOTJWMjQwSDEzNkMxMzEuNTk0IDI0MCAxMjggMjM2LjQwNiAxMjggMjMyVjE2MEg5NlYzMjhDOTYgMzUwLjA2MiAxMTMuOTM4IDM2OCAxMzYgMzY4SDI1NlYzMzZIMTM2QzEzMS41OTQgMzM2IDEyOCAzMzIuNDA2IDEyOCAzMjhaTTIyNCAyMjRWMjg4SDQxNlYyMjRIMjI0Wk0yODggMzg0SDQxNlYzMjBIMjg4VjM4NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1MiA0ODMuMzQ2IDMyIDQ0OCAzMlpNNDQ4IDQxNkg2NFYxNjBINDQ4VjQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TableTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M128 328V270.381C130.672 270.945 133.164 272 136 272H192V240H136C131.594 240 128 236.406 128 232V160H96V328C96 350.062 113.938 368 136 368H256V336H136C131.594 336 128 332.406 128 328ZM224 224V288H416V224H224ZM288 384H416V320H288V384Z" />
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V160H448V416Z" />
        </Icon>
    </>
}