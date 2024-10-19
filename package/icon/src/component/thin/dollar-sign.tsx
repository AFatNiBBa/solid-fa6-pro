
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dollar-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dollar-sign?s=thin dollar-sign}
 * @preview ![dollar-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDIuMDk1IDM2OS4zNDRDMjkyLjU2NCA0MTkuMjAzIDI0MS45NCA0NDguMDc4IDE2OC44NDggNDQ4LjA3OEMxNjguNjExIDQ0OC4wNzggMTY4LjMzNCA0NDguMDIzIDE2OC4wOTggNDQ4LjAyM1Y1MDRDMTY4LjA5OCA1MDguNDIyIDE2NC41MDQgNTEyIDE2MC4wOTggNTEyQzE1NS42OTIgNTEyIDE1Mi4wOTggNTA4LjQyMiAxNTIuMDk4IDUwNFY0NDYuODQ4QzE0Mi45MDkgNDQ2LjMzOCAxMzMuOTU2IDQ0Ni4xNzQgMTI0LjE5MiA0NDQuNzk3Qzk1LjEzIDQ0MC44NTkgNjMuMjI1IDQzMC40NjkgMzUuMDM4IDQyMS4zMTJMMjEuNTY5IDQxNi45NTNDMTcuMzUxIDQxNS42MDkgMTUuMDM4IDQxMS4wOTQgMTYuMzgyIDQwNi44OTFDMTcuNzU3IDQwMi42ODcgMjIuMjg4IDQwMC40MzcgMjYuNDQ0IDQwMS43MDNMNDAuMDA3IDQwNi4wOTRDNjcuNTM3IDQxNS4wNDcgOTguNzI0IDQyNS4xODcgMTI2LjM4IDQyOC45NTNDMjE0LjEyOCA0NDEuMjk3IDI3Ni43NTIgNDE2LjcwMyAyODYuNDA4IDM2Ni4zMjhDMjk5LjEyNiAzMDAuMDc4IDIzMC41MzQgMjgyLjM5MSAxNTcuOTEgMjYzLjY3MkwxMzkuODggMjU4Ljk4NEM4NS4xOTMgMjQ0LjQ4NCAyLjU3IDIyMi41NjIgMTcuOTEzIDE0Mi42NTZDMjcuNDcyIDkyLjY4MiA3OC42NDYgNjQuMTQ1IDE1Mi4wMDQgNjQuMjk3VjhDMTUyLjAwNCAzLjU3OCAxNTUuNTk4IDAgMTYwLjAwNCAwUzE2OC4wMDQgMy41NzggMTY4LjAwNCA4VjY0LjcxN0MxNzcuMDYyIDY1LjIzMiAxODYuMTk1IDY1Ljg0MiAxOTUuODE2IDY3LjIwM0MyMTQuNTAzIDY5Ljg0NCAyMzYuMzE1IDc1LjE1NiAyNjQuMzc3IDgzLjkwNkMyNjguNTk2IDg1LjIxOSAyNzAuOTM5IDg5LjcxOSAyNjkuNjI3IDkzLjkyMkMyNjguMzE0IDk4LjE0MSAyNjMuODQ2IDEwMC41IDI1OS42MjcgOTkuMTg4QzIzMi4zNzggOTAuNjg4IDIxMS40MDkgODUuNTYzIDE5My41NjYgODMuMDQ3QzEwNi4wNjggNzAuNjQxIDQzLjI4OCA5NS4yOTcgMzMuNiAxNDUuNjcyQzIyLjAzOCAyMDYuMDE2IDc2Ljc1NiAyMjUuNjg4IDE0NC4wMDQgMjQzLjUxNkwxNjEuODc5IDI0OC4xNzJDMjM0LjkwOSAyNjcgMzE3LjY1NyAyODguMzQ0IDMwMi4wOTUgMzY5LjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DollarSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M302.095 369.344C292.564 419.203 241.94 448.078 168.848 448.078C168.611 448.078 168.334 448.023 168.098 448.023V504C168.098 508.422 164.504 512 160.098 512C155.692 512 152.098 508.422 152.098 504V446.848C142.909 446.338 133.956 446.174 124.192 444.797C95.13 440.859 63.225 430.469 35.038 421.312L21.569 416.953C17.351 415.609 15.038 411.094 16.382 406.891C17.757 402.687 22.288 400.437 26.444 401.703L40.007 406.094C67.537 415.047 98.724 425.187 126.38 428.953C214.128 441.297 276.752 416.703 286.408 366.328C299.126 300.078 230.534 282.391 157.91 263.672L139.88 258.984C85.193 244.484 2.57 222.562 17.913 142.656C27.472 92.682 78.646 64.145 152.004 64.297V8C152.004 3.578 155.598 0 160.004 0S168.004 3.578 168.004 8V64.717C177.062 65.232 186.195 65.842 195.816 67.203C214.503 69.844 236.315 75.156 264.377 83.906C268.596 85.219 270.939 89.719 269.627 93.922C268.314 98.141 263.846 100.5 259.627 99.188C232.378 90.688 211.409 85.563 193.566 83.047C106.068 70.641 43.288 95.297 33.6 145.672C22.038 206.016 76.756 225.688 144.004 243.516L161.879 248.172C234.909 267 317.657 288.344 302.095 369.344Z" />
        </Icon>
    </>
}