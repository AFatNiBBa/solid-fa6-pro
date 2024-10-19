
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-of-life` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=thin star-of-life}
 * @preview ![star-of-life](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODMuOTc1IDM3Ny4wNjJDNDg3LjgxOSAzNzkuMjUgNDg5LjE0NyAzODQuMTI1IDQ4Ni45NTkgMzg3Ljk2OUM0ODUuNDc1IDM5MC41NjIgNDgyLjc3MiAzOTIgNDgwLjAwNiAzOTJDNDc4LjY0NyAzOTIgNDc3LjI4OCAzOTEuNjU2IDQ3Ni4wMzggMzkwLjkzOEwyNjQuMDA2IDI2OS43NzdWNTA0QzI2NC4wMDYgNTA4LjQwNiAyNjAuNDI4IDUxMiAyNTYuMDA2IDUxMlMyNDguMDA2IDUwOC40MDYgMjQ4LjAwNiA1MDRWMjY5Ljc3N0wzNS45NzUgMzkwLjkzOEMzNC43MjUgMzkxLjY1NiAzMy4zNjYgMzkyIDMyLjAwNiAzOTJDMjkuMjQxIDM5MiAyNi41MzggMzkwLjU2MiAyNS4wNTMgMzg3Ljk2OUMyMi44NjYgMzg0LjEyNSAyNC4xOTQgMzc5LjI1IDI4LjAzOCAzNzcuMDYyTDIzOS44OTcgMjU2TDI4LjAzOCAxMzQuOTM4QzI0LjE5NCAxMzIuNzUgMjIuODY2IDEyNy44NzUgMjUuMDUzIDEyNC4wMzFDMjcuMjU2IDEyMC4xMjUgMzIuMTQ3IDExOC44NDQgMzUuOTc1IDEyMS4wNjNMMjQ4LjAwNiAyNDIuMjIzVjhDMjQ4LjAwNiAzLjU5NCAyNTEuNTg0IDAgMjU2LjAwNiAwUzI2NC4wMDYgMy41OTQgMjY0LjAwNiA4VjI0Mi4yMjNMNDc2LjAzOCAxMjEuMDYyQzQ3OS43ODggMTE4Ljg0NCA0ODQuNzQxIDEyMC4xMjUgNDg2Ljk1OSAxMjQuMDMxQzQ4OS4xNDcgMTI3Ljg3NSA0ODcuODE5IDEzMi43NSA0ODMuOTc1IDEzNC45MzdMMjcyLjExNiAyNTZMNDgzLjk3NSAzNzcuMDYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarOfLife(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M483.975 377.062C487.819 379.25 489.147 384.125 486.959 387.969C485.475 390.562 482.772 392 480.006 392C478.647 392 477.288 391.656 476.038 390.938L264.006 269.777V504C264.006 508.406 260.428 512 256.006 512S248.006 508.406 248.006 504V269.777L35.975 390.938C34.725 391.656 33.366 392 32.006 392C29.241 392 26.538 390.562 25.053 387.969C22.866 384.125 24.194 379.25 28.038 377.062L239.897 256L28.038 134.938C24.194 132.75 22.866 127.875 25.053 124.031C27.256 120.125 32.147 118.844 35.975 121.063L248.006 242.223V8C248.006 3.594 251.584 0 256.006 0S264.006 3.594 264.006 8V242.223L476.038 121.062C479.788 118.844 484.741 120.125 486.959 124.031C489.147 127.875 487.819 132.75 483.975 134.937L272.116 256L483.975 377.062Z" />
        </Icon>
    </>
}