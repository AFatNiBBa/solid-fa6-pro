
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bookmark` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=thin bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTZDMzQ2LjQ2NyAxNiAzNjggMzcuNTMzIDM2OCA2NFY0OTUuOTc2TDE5MiAzOTMuMzA5TDE2IDQ5NS45NzZWNjRDMTYgMzcuNTMzIDM3LjUzMyAxNiA2NCAxNkgzMjBNMzIwIDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0OTUuOTc2QzAgNTA4LjMyNSAxMy4zOTUgNTE2LjAxOCAyNC4wNjIgNTA5Ljc5NkwxOTIgNDExLjgzMkwzNTkuOTM4IDUwOS43OTZDMzcwLjYwNSA1MTYuMDE4IDM4NCA1MDguMzI1IDM4NCA0OTUuOTc2VjY0QzM4NCAyOC42NTQgMzU1LjM0NiAwIDMyMCAwTDMyMCAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 16C346.467 16 368 37.533 368 64V495.976L192 393.309L16 495.976V64C16 37.533 37.533 16 64 16H320M320 0H64C28.654 0 0 28.654 0 64V495.976C0 508.325 13.395 516.018 24.062 509.796L192 411.832L359.938 509.796C370.605 516.018 384 508.325 384 495.976V64C384 28.654 355.346 0 320 0L320 0Z" />
        </Icon>
    </>
}