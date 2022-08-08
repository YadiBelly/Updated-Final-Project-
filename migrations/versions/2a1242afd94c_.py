"""empty message

Revision ID: 2a1242afd94c
Revises: 6b4c50c71d3d
Create Date: 2022-08-08 20:52:34.335204

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a1242afd94c'
down_revision = '6b4c50c71d3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('first_name', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('last_name', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('phone', sa.String(length=80), nullable=False))
    op.add_column('user', sa.Column('zip_code', sa.String(length=80), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'zip_code')
    op.drop_column('user', 'phone')
    op.drop_column('user', 'last_name')
    op.drop_column('user', 'first_name')
    # ### end Alembic commands ###
