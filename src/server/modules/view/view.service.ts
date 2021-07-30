import { Injectable, OnModuleInit } from '@nestjs/common'
import next from 'next'
import { NextServer } from 'next/dist/server/next'

const dev = process.env.NODE_ENV !== 'production';

@Injectable()
export class ViewService implements OnModuleInit {
    private server: NextServer

    async onModuleInit(): Promise<void> {
        try {
            this.server = next({ dev, dir: './src/client' })
            await this.server.prepare()
        } catch (error) {
            console.log(error)
        }
    }

    getNextServer(): NextServer {
        return this.server
    }
}