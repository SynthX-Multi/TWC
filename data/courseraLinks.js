export const courseraLinks = [
  { name: "Tutorials Point", url: "https://www.tutorialspoint.com/compilers/online-python-compiler.htm" },
  { name: "Fern", url: "https://scrapbooking-directory.com" },
  { name: "VCSA Link Site", url: "https://ixlskills.blogspot.com" },
  { name: "Woofbite Link Site", url: "https://multipleurlopen.com/" },
  { name: "Bull 33 Link Site", url: "https://www.youtube.com/@Bull-33/videos" }
];

export const copySnippet = `def process_links():
    print("CAN See me :)")
    lines = []
    try:
        while True:
            line = input().strip()
            if line:
                lines.append(line)
    except EOFError:
        pass
    links = []
    for line in lines:
        if line.startswith("http://") or line.startswith("https://"):
            links.append(line)
        else:
            if "." in line and " " not in line:
                links.append(f"https://{line}")
    print("\nDetected links:")
    for link in links:
        print(link)
    print(f"\nTotal links found: {len(links)}")
if __name__ == "__main__":
    process_links()
`;
