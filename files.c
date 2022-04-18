#include <dirent.h>
#include <stdio.h>

int main(int argc, const char *argv[]) {
    const char* dirtoopen = argv[1];
    if (auto dir = opendir(dirtoopen)) {
        while (auto f = readdir(dir)) {
            if (!f->d_name || f->d_name[1] == '~')

                continue; // Skip everything that starts with a dot

            printf("<br><li><a href='%s", f->d_name);
            printf("'>%s", f->d_name);
            printf("</a>\n");
        }
        closedir(dir);
    }
}