
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `candy-corn` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=light candy-corn}
 * @preview ![candy-corn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuOTk4IDBDMzE0LjI0MiAxLjYyNSAzMTUuNDkyIDM5LjUgMzIyLjExNyA3Mi41MDJDMzUyLjQ5MiAyMjQuMDA2IDQxNi4xMjEgNDE2LjAxIDQ3OS44NzMgNDE2LjAxSDQ3OS45OThDNTQzLjc1MiA0MTUuODg1IDYwNy41MDQgMjI0LjEzMSA2MzcuODgxIDcyLjUwMkM2NDQuNTA2IDM5LjUgNjQ1Ljc1NiAxLjYyNSA0NzkuOTk4IDBaTTQ3OS44NzMgMzg0LjAxQzQ2Ny4xMjMgMzg0LjAxIDQ0MC42MjEgMzQ2Ljg4MyA0MTIuNDk2IDI3NS4yNTZDNDU2LjI0OCAyNzEuNTA2IDUwMy42MjUgMjcxLjUwNiA1NDcuNTAyIDI3NS4yNTZDNTE5LjI1IDM0Ni44ODMgNDkyLjc1IDM4NC4wMSA0NzkuODczIDM4NC4wMVpNNTU5LjAwMiAyNDQuMjU2QzUwOC4xMjUgMjM5LjI1NiA0NTEuNzQ4IDIzOS4yNTYgNDAwLjk5NiAyNDQuMjU2QzM5MS40OTQgMjE3LjEzMSAzODEuOTk0IDE4Ni4yNTQgMzcyLjk5NCAxNTEuNjI5QzQzOS42MjEgMTQxLjg3OSA1MjAuMzc1IDE0MS43NTQgNTg3LjAwNCAxNTEuNjI5QzU3Ny44NzkgMTg2LjI1NCA1NjguNTAyIDIxNy4xMzEgNTU5LjAwMiAyNDQuMjU2Wk02MDYuNjI5IDY2LjEyN0M2MDIuODc5IDg1LjEyNyA1OTguNzU0IDEwMy4wMDIgNTk0Ljc1NCAxMjAuMzc3QzUyMy4zNzUgMTA5LjUwMiA0MzYuNjIxIDEwOS41MDIgMzY1LjI0NCAxMjAuMzc3QzM2MS4yNDQgMTAzLjAwMiAzNTcuMTE5IDg1LjEyNyAzNTMuMzY3IDY2LjEyN0MzNTEuMzY3IDU2LjI1IDM1MS44NjcgNTMuNzUgMzUyLjExNyA1My4xMjVDMzUyLjI0MiA1Mi44NzUgMzY0Ljk5NCAzMy4xMjUgNDc5Ljk5OCAzMkM1OTUuMDA0IDMzLjEyNSA2MDcuNzU0IDUyLjg3NSA2MDcuODc5IDUzLjEyNUM2MDguMTI5IDUzLjc1IDYwOC42MjkgNTYuMjUgNjA2LjYyOSA2Ni4xMjdaTTg0Ljk4IDIwNS43NTRDLTMxLjE0OCAzMjQuMjU4IC0zLjM5OCAzNTAuMTMzIDI0LjQ3OSAzNjguNzZDMTUzLjEwOSA0NTQuMzg3IDMzMy45OTIgNTQ1LjEzOSAzNzguOTk0IDUwMC4wMTJIMzc5LjExOUM0MjMuOTk2IDQ1NC43NjIgMzMzLjYxNyAyNzQuMTMxIDI0Ny44NjMgMTQ1LjM3OUMyMjkuMjM4IDExNy41MDIgMjAzLjM2MSA4OS43NTIgODQuOTggMjA1Ljc1NFpNMzU2LjM2OSA0NzcuMzg3QzM0Ny4zNjcgNDg2LjM4NyAzMDIuMzY1IDQ3OS4wMTIgMjMxLjg2MyA0NDguMjYyQzI2MC4xMTMgNDE0LjYzNSAyOTMuNzQgMzgxLjEzNSAzMjcuMjQyIDM1Mi43NThDMzU3Ljk5NCA0MjMuMzg1IDM2NS4zNjkgNDY4LjM4NyAzNTYuMzY5IDQ3Ny4zODdaTTMxMy40OTIgMzIyLjYzM0MyNzMuOTkgMzU1LjEzMyAyMzQuMTEzIDM5NC44ODUgMjAxLjczNiA0MzQuMzg1QzE3NS44NTkgNDIxLjg4NSAxNDcuMzU5IDQwNi43NiAxMTYuNDgyIDM4OC42MzVDMTU2LjYwOSAzMzQuNjMzIDIxMy43MzYgMjc3LjUwNiAyNjcuNzQgMjM3LjM4MUMyODUuODY1IDI2OC4yNTYgMzAwLjk5IDI5Ni43NTggMzEzLjQ5MiAzMjIuNjMzWk04OC45OCAzNzIuMDFDNzMuNzMgMzYyLjYzNSA1OC4yMyAzNTIuODgzIDQyLjEwNCAzNDIuMTMzQzMzLjcyOSAzMzYuNTA4IDMyLjIyOSAzMzQuMzgzIDMxLjk3OSAzMzMuNzU4QzMxLjk3OSAzMzMuNjMzIDI2Ljk3OSAzMTAuNjMzIDEwNy42MDcgMjI4LjUwNkMxODkuNzM2IDE0Ny44NzkgMjEyLjczNiAxNTIuODc5IDIxMi44NjEgMTUyLjg3OUMyMTMuNDg2IDE1My4xMjkgMjE1LjYxMSAxNTQuNjI5IDIyMS4yMzYgMTYzLjAwNEMyMzEuOTg4IDE3OS4xMjkgMjQxLjczOCAxOTQuNjI5IDI1MS4xMTMgMjA5Ljg4MUMxOTMuMTExIDI1Mi42MzEgMTMxLjczMiAzMTQuMDA4IDg4Ljk4IDM3Mi4wMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CandyCorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M479.998 0C314.242 1.625 315.492 39.5 322.117 72.502C352.492 224.006 416.121 416.01 479.873 416.01H479.998C543.752 415.885 607.504 224.131 637.881 72.502C644.506 39.5 645.756 1.625 479.998 0ZM479.873 384.01C467.123 384.01 440.621 346.883 412.496 275.256C456.248 271.506 503.625 271.506 547.502 275.256C519.25 346.883 492.75 384.01 479.873 384.01ZM559.002 244.256C508.125 239.256 451.748 239.256 400.996 244.256C391.494 217.131 381.994 186.254 372.994 151.629C439.621 141.879 520.375 141.754 587.004 151.629C577.879 186.254 568.502 217.131 559.002 244.256ZM606.629 66.127C602.879 85.127 598.754 103.002 594.754 120.377C523.375 109.502 436.621 109.502 365.244 120.377C361.244 103.002 357.119 85.127 353.367 66.127C351.367 56.25 351.867 53.75 352.117 53.125C352.242 52.875 364.994 33.125 479.998 32C595.004 33.125 607.754 52.875 607.879 53.125C608.129 53.75 608.629 56.25 606.629 66.127ZM84.98 205.754C-31.148 324.258 -3.398 350.133 24.479 368.76C153.109 454.387 333.992 545.139 378.994 500.012H379.119C423.996 454.762 333.617 274.131 247.863 145.379C229.238 117.502 203.361 89.752 84.98 205.754ZM356.369 477.387C347.367 486.387 302.365 479.012 231.863 448.262C260.113 414.635 293.74 381.135 327.242 352.758C357.994 423.385 365.369 468.387 356.369 477.387ZM313.492 322.633C273.99 355.133 234.113 394.885 201.736 434.385C175.859 421.885 147.359 406.76 116.482 388.635C156.609 334.633 213.736 277.506 267.74 237.381C285.865 268.256 300.99 296.758 313.492 322.633ZM88.98 372.01C73.73 362.635 58.23 352.883 42.104 342.133C33.729 336.508 32.229 334.383 31.979 333.758C31.979 333.633 26.979 310.633 107.607 228.506C189.736 147.879 212.736 152.879 212.861 152.879C213.486 153.129 215.611 154.629 221.236 163.004C231.988 179.129 241.738 194.629 251.113 209.881C193.111 252.631 131.732 314.008 88.98 372.01Z" />
        </Icon>
    </>
}