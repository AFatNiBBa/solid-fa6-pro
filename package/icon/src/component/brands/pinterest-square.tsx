
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pinterest-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pinterest-square?s=brands pinterest-square}
 * @preview ![pinterest-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggODB2MzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDE1NC40YzkuOC0xNi40IDIyLjQtNDAgMjcuNC01OS4zIDMtMTEuNSAxNS4zLTU4LjQgMTUuMy01OC40IDggMTUuMyAzMS40IDI4LjIgNTYuMyAyOC4yIDc0LjEgMCAxMjcuNC02OC4xIDEyNy40LTE1Mi43IDAtODEuMS02Ni4yLTE0MS44LTE1MS40LTE0MS44LTEwNiAwLTE2Mi4yIDcxLjEtMTYyLjIgMTQ4LjYgMCAzNiAxOS4yIDgwLjggNDkuOCA5NS4xIDQuNyAyLjIgNy4xIDEuMiA4LjItMy4zLjgtMy40IDUtMjAuMSA2LjgtMjcuOC42LTIuNS4zLTQuNi0xLjctNy0xMC4xLTEyLjMtMTguMy0zNC45LTE4LjMtNTYgMC01NC4yIDQxLTEwNi42IDExMC45LTEwNi42IDYwLjMgMCAxMDIuNiA0MS4xIDEwMi42IDk5LjkgMCA2Ni40LTMzLjUgMTEyLjQtNzcuMiAxMTIuNC0yNC4xIDAtNDIuMS0xOS45LTM2LjQtNDQuNCA2LjktMjkuMiAyMC4zLTYwLjcgMjAuMy04MS44IDAtNTMtNzUuNS00NS43LTc1LjUgMjUgMCAyMS43IDcuMyAzNi41IDcuMyAzNi41LTMxLjQgMTMyLjgtMzYuMSAxMzQuNS0yOS42IDE5Mi42bDIuMi44SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFY4MGMwLTI2LjUgMjEuNS00OCA0OC00OGgzNTJjMjYuNSAwIDQ4IDIxLjUgNDggNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function PinterestSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
        </Icon>
    </>
}