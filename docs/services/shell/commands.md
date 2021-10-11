---
title: "Command Reference"
---

## Shell Interface

Welcome to the live command reference! Here you can securely access our login server via [SSH](/docs/services/shell/#ssh) and run commands to manage your account, edit a website, or work on our server. Below is a list of account management commands with a brief description of what they do and how to use them. Simply type in a command and hit enter to run it. To log out, run the command `exit`.

<div>
  <iframe src="https://ssh.ocf.berkeley.edu" class="shell-frame">
    <p>Sorry! Your browser can't display this window.</p>
  </iframe>
</div>

## OCF commands

**Key**: `ARGUMENT` `[optioanal]`

|                     **Command**                      |                                        **Description**                                        |
| :--------------------------------------------------: | :-------------------------------------------------------------------------------------------: |
|                     `how SCRIPT`                     |                              Shows the source code for a script                               |
|     [`makehttp`](/docs/services/web/#h3_via-ssh)     |                   Puts a shortcut to your web directory in your home folder                   |
| [`makemysql`](/docs/services/mysql/#h3_ssh-terminal) | Generates a new random password for your database, creating the database if it does not exist |
|                       `paper`                        |                         Shows how many pages you can currently print                          |
|                    `update-email`                    |                Prompts you to set a contact email address for your OCF account                |

## File commands

For convenience, here is a very basic listing of commands to manage files. For a more complete listing, see for example [Wikipedia](https://en.wikipedia.org/wiki/List_of_Unix_commands). For more information on a specific command, run `man COMMAND`.

**Key**: `ARGUMENT` `[optioanal]`

|      **Command**      |                              **Description**                               |
| :-------------------: | :------------------------------------------------------------------------: |
|    `cd DIRECTORY`     |                 Changes the current directory to a new one                 |
| `cp [-r] SOURCE DEST` |       Copies a file. The `-r` option allows for copying directories.       |
|      `less FILE`      |                 Lets you view the contents of a text file                  |
|      `ls [FILE]`      |               Lists information about files and directories                |
|   `mkdir DIRECTORY`   |                          Creates a new directory                           |
|      `nano FILE`      |              Lets you edit a text file with a basic interface              |
|   `mv SOURCE DEST`    |                     Moves or renames a file or folder                      |
|    `rm [-r] FILE`     | Deletes a file. The `-r` option allows for deleting non-empty directories. |
|   `rmdir DIRECTORY`   |              Deletes an empty directory. Safer than `rm -r`.               |
