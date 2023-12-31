const CLI_COMMAND_UP = 'up';
const CLI_COMMAND_CD = 'cd';
const CLI_COMMAND_LS = 'ls';
const CLI_COMMAND_CAT = 'cat';
const CLI_COMMAND_ADD = 'add';
const CLI_COMMAND_RN = 'rn';
const CLI_COMMAND_CP = 'cp';
const CLI_COMMAND_MV = 'mv';
const CLI_COMMAND_RM = 'rm';
const CLI_COMMAND_OS = 'os';
const CLI_COMMAND_HASH = 'hash';
const CLI_COMMAND_COMPRESS = 'compress';
const CLI_COMMAND_DECOMPRESS = 'decompress';
const CLI_COMMAND_EXIT = '.exit';

const commandsArgumentsCount = {
    [CLI_COMMAND_UP]: 0,
    [CLI_COMMAND_CD]: 1,
    [CLI_COMMAND_LS]: 0,
    [CLI_COMMAND_CAT]: 1,
    [CLI_COMMAND_ADD]: 1,
    [CLI_COMMAND_RN]: 2,
    [CLI_COMMAND_CP]: 2,
    [CLI_COMMAND_MV]: 2,
    [CLI_COMMAND_RM]: 1,
    [CLI_COMMAND_OS]: 1,
    [CLI_COMMAND_HASH]: 1,
    [CLI_COMMAND_COMPRESS]: 2,
    [CLI_COMMAND_DECOMPRESS]: 2,
    [CLI_COMMAND_EXIT]: 0,
};

const CLI_COMMAND_OS_ARGUMENT_EOL = '--EOL';
const CLI_COMMAND_OS_ARGUMENT_CPUS = '--cpus';
const CLI_COMMAND_OS_ARGUMENT_HOMEDIR = '--homedir';
const CLI_COMMAND_OS_ARGUMENT_USERNAME = '--username';
const CLI_COMMAND_OS_ARGUMENT_ARCHITECTURE = '--architecture';

const commandsParameters = {
    [CLI_COMMAND_OS]: [
        CLI_COMMAND_OS_ARGUMENT_EOL,
        CLI_COMMAND_OS_ARGUMENT_CPUS,
        CLI_COMMAND_OS_ARGUMENT_HOMEDIR,
        CLI_COMMAND_OS_ARGUMENT_USERNAME,
        CLI_COMMAND_OS_ARGUMENT_ARCHITECTURE,
    ],
};

export {
    commandsArgumentsCount,
    commandsParameters,
    CLI_COMMAND_OS_ARGUMENT_EOL,
    CLI_COMMAND_OS_ARGUMENT_CPUS,
    CLI_COMMAND_OS_ARGUMENT_HOMEDIR,
    CLI_COMMAND_OS_ARGUMENT_USERNAME,
    CLI_COMMAND_OS_ARGUMENT_ARCHITECTURE,
    CLI_COMMAND_OS,
    CLI_COMMAND_UP,
    CLI_COMMAND_LS,
    CLI_COMMAND_CD,
    CLI_COMMAND_CAT,
    CLI_COMMAND_ADD,
    CLI_COMMAND_RM,
    CLI_COMMAND_RN,
    CLI_COMMAND_HASH,
    CLI_COMMAND_COMPRESS,
    CLI_COMMAND_DECOMPRESS,
    CLI_COMMAND_CP,
    CLI_COMMAND_MV,
    CLI_COMMAND_EXIT,
};
